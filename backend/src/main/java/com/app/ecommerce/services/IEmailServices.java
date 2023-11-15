package com.app.ecommerce.services;

import javax.mail.internet.AddressException;

import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.sendmail.sendMailInfoOrder;

//import javax.mail.MessagingException;

import com.app.ecommerce.DTO.sendmail.sendmailDTO;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.models.AccountOrder;

import jakarta.mail.MessagingException;

public interface IEmailServices {
    public Account sendOTPbyEmail(String id, sendmailDTO sendmail) throws MessagingException;

    public void sendOrderUser(CreateOrderRequest request, String username) throws MessagingException;
}
