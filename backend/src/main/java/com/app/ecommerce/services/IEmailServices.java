package com.app.ecommerce.services;

import javax.mail.internet.AddressException;

//import javax.mail.MessagingException;

import com.app.ecommerce.DTO.sendmail.sendmailDTO;
import com.app.ecommerce.models.Account;

import jakarta.mail.MessagingException;

public interface IEmailServices {
    // void sendSimpleMailMessage(String name, String to, String token);
    public Account sendSimpleMailMessage(String id, sendmailDTO sendmail) throws MessagingException;


    public void sendMineMessageWithAttachments(String name, String to, String token);

    public void sendMineMessageWithEmbeddedImages(String name, String to, String token);

    public void sendMineMessageWithEmbeddedFiles(String name, String to, String token);

    public void sendHtmlEmail() throws AddressException, javax.mail.MessagingException, MessagingException;

    public void sendHtmlEmailWithEmbeddedFiles(String name, String to, String token);
}
