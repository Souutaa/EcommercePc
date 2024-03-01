package com.app.ecommerce.services;

import java.io.UnsupportedEncodingException;

import com.app.ecommerce.DTO.VNPAY.AmountReqDTO;
import com.app.ecommerce.DTO.VNPAY.PaymentResDTO;

public interface IVnPayServices {
    public PaymentResDTO paymentResDTO(long total) throws UnsupportedEncodingException;

}
