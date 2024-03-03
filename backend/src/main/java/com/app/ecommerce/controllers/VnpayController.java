package com.app.ecommerce.controllers;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.app.ecommerce.DTO.VNPAY.PaymentResDTO;
import com.app.ecommerce.DTO.VNPAY.TransactionStatusDTO;
import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.order.CreateOrderResponseVnPay;
import com.app.ecommerce.config.JwtService;
import com.app.ecommerce.config.VnpayConfig;
import com.app.ecommerce.models.AccountOrder;
import com.app.ecommerce.services.IAccountOrderServices;
import com.app.ecommerce.services.IVnPayServices;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@CrossOrigin
public class VnpayController {
    @Autowired
    private IVnPayServices iVnPayServices;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private IAccountOrderServices iAccountOrderServices;

    // @GetMapping("/pay")

    /*
     * Khi vào /pay
     * truy cập vào
     * public @ResponseBody ResponseEntity<PaymentResDTO>
     * createPayment(@Valid @RequestBody CreateOrderRequest
     * request, @RequestHeader("Authorization") String authorization)
     * 
     * 
     * 1. Tạo order mới với payment status = pending
     * AccountOrder createOrder(CreateOrderRequest request, String username)
     * 
     * 2. PaymentResDTO paymentResDTO =
     * iVnPayServices.paymentResDTO(request.getTotal());
     * 
     * 3.
     */
    // @PostMapping("/pay")
    // public @ResponseBody ResponseEntity<PaymentResDTO> createPayment(@RequestBody
    // AmountReqDTO amount,
    // @RequestHeader("Authorization") String authorization)
    // throws UnsupportedEncodingException {
    // String token = authorization.split(" ")[1].trim();
    // String username = this.jwtService.extractUsername(token);
    // PaymentResDTO paymentResDTO =
    // iVnPayServices.paymentResDTO(amount.getAmount());
    // // com.google.gson.JsonObject job = new JsonObject();
    // // job.addProperty("code", "00");
    // // job.addProperty("message", "success");
    // // job.addProperty("data", paymentUrl);
    // // Gson gson = new Gson();
    // // resp.getWriter().write(gson.toJson(job));
    // return ResponseEntity.status(HttpStatus.OK).body(paymentResDTO);
    // }
    @PostMapping("/pay")
    public @ResponseBody ResponseEntity<CreateOrderResponseVnPay> createPayment(
            @Valid @RequestBody CreateOrderRequest request,
            @RequestHeader("Authorization") String authorization)
            throws UnsupportedEncodingException, NumberFormatException, SQLException, MessagingException {
        String token = authorization.split(" ")[1].trim();
        String username = this.jwtService.extractUsername(token);
        AccountOrder accountOrder = iAccountOrderServices.createOrderPayment(request, username);
        PaymentResDTO paymentResDTO = iVnPayServices.paymentResDTO(request.getTotal());

        CreateOrderResponseVnPay createOrderResponseVnPay = CreateOrderResponseVnPay.builder()
                .URL(paymentResDTO.getURL())
                .message(paymentResDTO.getMessage())
                .paymentStatus(paymentResDTO.getStatus())
                .username(username)
                .status(accountOrder.getStatus().toString())
                .total(accountOrder.getTotal())
                .build();
        // PaymentResDTO paymentResDTO =
        // iVnPayServices.paymentResDTO(request.getTotal());
        // return ResponseEntity.status(HttpStatus.OK).body(paymentResDTO);
        return ResponseEntity.ok(createOrderResponseVnPay);
    }

    @GetMapping("/payment_infor")
    // public ResponseEntity<?> transaction(
    public RedirectView transaction(
            @RequestParam(value = "vnp_Amount", required = false) String amount,
            @RequestParam(value = "vnp_BankCode", required = false) String bankCode,
            @RequestParam(value = "vnp_OrderInfo", required = false) String order,
            @RequestParam(value = "vnp_ResponseCode", required = false) String responseCode) {
        RedirectView redirectView = new RedirectView();
        TransactionStatusDTO transactionStatusDTO = new TransactionStatusDTO();
        if (responseCode.equals("00")) {
            transactionStatusDTO.setStatus("OK");
            transactionStatusDTO.setMessage("Successfully");
            transactionStatusDTO.setData("");
            redirectView.setUrl("http://localhost:8080/order/create");
        } else {
            transactionStatusDTO.setStatus("No");
            transactionStatusDTO.setMessage("Failed");
            transactionStatusDTO.setData("");
            redirectView.setUrl("http://localhost:3000/");
        }
        // return ResponseEntity.status(HttpStatus.OK).body(transactionStatusDTO);
        return redirectView;
    }
}
