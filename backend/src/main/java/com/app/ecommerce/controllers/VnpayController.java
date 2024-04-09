package com.app.ecommerce.controllers;

import java.io.UnsupportedEncodingException;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.app.ecommerce.DTO.VNPAY.PaymentResDTO;
import com.app.ecommerce.DTO.VNPAY.TransactionStatusDTO;
import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.order.CreateOrderResponseVnPay;
import com.app.ecommerce.config.JwtService;
import com.app.ecommerce.models.AccountOrder;
import com.app.ecommerce.services.IAccountOrderServices;
import com.app.ecommerce.services.IVnPayServices;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

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

    @PostMapping("/pay")
    public @ResponseBody ResponseEntity<CreateOrderResponseVnPay> createPayment(
            @Valid @RequestBody CreateOrderRequest request,
            @RequestHeader("Authorization") String authorization)
            throws UnsupportedEncodingException, NumberFormatException, SQLException, MessagingException {
        String token = authorization.split(" ")[1].trim();
        String username = this.jwtService.extractUsername(token);
        PaymentResDTO paymentResDTO = iVnPayServices.paymentResDTO(request.getTotal());
        AccountOrder accountOrder = iAccountOrderServices.createOrderVNPay(request, username, paymentResDTO.getOrderInfor());
        CreateOrderResponseVnPay createOrderResponseVnPay = CreateOrderResponseVnPay.builder()
                .URL(paymentResDTO.getURL())
                .message(paymentResDTO.getMessage())
                .paymentStatus(paymentResDTO.getStatus())
                .username(username)
                .status(accountOrder.getStatus().toString())
                .total(accountOrder.getTotal())
                .orderId(accountOrder.getId())
                .build();
        
        return ResponseEntity.ok(createOrderResponseVnPay);
    }

    @GetMapping("/payment_infor")
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
            redirectView.setUrl("http://192.168.1.161:8000/order/create");
        } else {
            transactionStatusDTO.setStatus("No");
            transactionStatusDTO.setMessage("Failed");
            transactionStatusDTO.setData("");
            redirectView.setUrl("http://192.168.1.161:3000/");
        }
        return redirectView;
    }
}
