package com.app.ecommerce.services.implement;

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

import org.springframework.stereotype.Service;

import com.app.ecommerce.DTO.VNPAY.PaymentResDTO;
import com.app.ecommerce.config.VnpayConfig;
import com.app.ecommerce.services.IVnPayServices;

@Service
public class VnpayServicesImp implements IVnPayServices {

    @Override
    public PaymentResDTO paymentResDTO(long total) throws UnsupportedEncodingException {
        // String orderType = "other";
        // long amount = Integer.parseInt(req.getParameter("amount")) * 100;
        // String bankCode = req.getParameter("bankCode");

        long amount = total * 100;
        String bankCode = "NCB";
        String orderType = "other";
        String vnp_TxnRef = VnpayConfig.getRandomNumber(8);
        // String vnp_IpAddr = VnpayConfig.getIpAddress(req);
        String vnp_IpAddr = "10.65.15.98";
        String vnp_TmnCode = VnpayConfig.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", VnpayConfig.vnp_Version);
        vnp_Params.put("vnp_Command", VnpayConfig.vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", bankCode);
        // vnp_Params.put("vnp_OrderId", String.valueOf(orderId));

        // if (bankCode != null && !bankCode.isEmpty()) {
        // vnp_Params.put("vnp_BankCode", bankCode);
        // }
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", orderType);
        vnp_Params.put("vnp_Locale", "vn");
        // String locate = req.getParameter("language");
        // if (locate != null && !locate.isEmpty()) {
        // vnp_Params.put("vnp_Locale", locate);
        // } else {
        // vnp_Params.put("vnp_Locale", "vn");
        // }
        vnp_Params.put("vnp_ReturnUrl", VnpayConfig.vnp_ReturnUrl);
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        // Calender
        ZonedDateTime now = ZonedDateTime.now();

        // Add 15 days to the current date
        ZonedDateTime vnpExpireDate = now.plusDays(4);

        // Define a formatter for the desired output pattern
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");

        // Format the expiration date as a string
        String formattedExpireDate = vnpExpireDate.format(formatter);
        //

        String vnp_CreateDate = formatter.format(ZonedDateTime.now());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        vnp_Params.put("vnp_ExpireDate", formattedExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                // Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                // Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }

        String queryUrl = query.toString();
        String vnp_SecureHash = VnpayConfig.hmacSHA512(VnpayConfig.secretKey, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = VnpayConfig.vnp_PayUrl + "?" + queryUrl;

        PaymentResDTO paymentResDTO = new PaymentResDTO();
        paymentResDTO.setStatus("OK");
        paymentResDTO.setMessage("Successfully");
        paymentResDTO.setURL(paymentUrl);
        paymentResDTO.setOrderInfor(vnp_TxnRef);

        return paymentResDTO;

    }

}
