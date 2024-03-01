package com.app.ecommerce.controllers;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.VNPAY.AmountReqDTO;
import com.app.ecommerce.DTO.VNPAY.PaymentResDTO;
import com.app.ecommerce.DTO.VNPAY.TransactionStatusDTO;
import com.app.ecommerce.config.JwtService;
import com.app.ecommerce.config.VnpayConfig;
import com.app.ecommerce.services.IVnPayServices;

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

    @GetMapping("/pay")
    public @ResponseBody ResponseEntity<PaymentResDTO> createPayment(@RequestBody AmountReqDTO amount,
            @RequestHeader("Authorization") String authorization)
            throws UnsupportedEncodingException {
        String token = authorization.split(" ")[1].trim();
        String username = this.jwtService.extractUsername(token);
        PaymentResDTO paymentResDTO = iVnPayServices.paymentResDTO(amount.getAmount());
        // com.google.gson.JsonObject job = new JsonObject();
        // job.addProperty("code", "00");
        // job.addProperty("message", "success");
        // job.addProperty("data", paymentUrl);
        // Gson gson = new Gson();
        // resp.getWriter().write(gson.toJson(job));
        return ResponseEntity.status(HttpStatus.OK).body(paymentResDTO);
    }

    @GetMapping("/payment_infor")
    public ResponseEntity<?> transaction(
            @RequestParam(value = "vnp_Amount", required = false) String amount,
            @RequestParam(value = "vnp_BankCode", required = false) String bankCode,
            @RequestParam(value = "vnp_OrderInfo", required = false) String order,
            @RequestParam(value = "vnp_ResponseCode", required = false) String responseCode) {
        TransactionStatusDTO transactionStatusDTO = new TransactionStatusDTO();
        if (responseCode.equals("00")) {
            transactionStatusDTO.setStatus("OK");
            transactionStatusDTO.setMessage("Successfully");
            transactionStatusDTO.setData("");
        } else {
            transactionStatusDTO.setStatus("No");
            transactionStatusDTO.setMessage("Failed");
            transactionStatusDTO.setData("");
        }
        return ResponseEntity.status(HttpStatus.OK).body(transactionStatusDTO);
    }

}
