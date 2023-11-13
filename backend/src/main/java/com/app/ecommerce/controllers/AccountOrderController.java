package com.app.ecommerce.controllers;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.order.UpdateStatusRequest;
import com.app.ecommerce.config.JwtService;
import com.app.ecommerce.models.AccountOrder;
import com.app.ecommerce.models.OrderStatus;
import com.app.ecommerce.services.IAccountOrderServices;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class AccountOrderController {

  @Autowired
  private IAccountOrderServices orderServices;

  @Autowired
  private JwtService jwtService;

  @PostMapping("/create")
  public ResponseEntity<AccountOrder> create(
      @Valid @RequestBody CreateOrderRequest request, @RequestHeader("Authorization") String authorization)
      throws NumberFormatException, SQLException {
    String token = authorization.split(" ")[1].trim();
    String username = this.jwtService.extractUsername(token);
    return ResponseEntity.ok(orderServices.createOrder(request, username));
  }

  @PatchMapping("/update-status")
  public ResponseEntity<AccountOrder> updateStatus(
      @Valid @RequestBody UpdateStatusRequest request) {
    if (request.getOrderStatus().equals(OrderStatus.CANCELED)) {
      return ResponseEntity.ok(orderServices.cancelOrder(request.getOrderId()));
    }
    return ResponseEntity.ok(orderServices.updateOrderStatus(request));
  }
}
