package com.app.ecommerce.services;

import java.sql.SQLException;

import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.order.UpdateStatusRequest;
import com.app.ecommerce.models.AccountOrder;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

public interface IAccountOrderServices {
  public AccountOrder createOrder(CreateOrderRequest request, String username) throws NumberFormatException, SQLException, MessagingException;

  public AccountOrder updateOrderStatus(@Valid UpdateStatusRequest request);

  public AccountOrder cancelOrder(Integer orderId);
}
