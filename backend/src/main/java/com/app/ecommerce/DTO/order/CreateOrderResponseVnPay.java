package com.app.ecommerce.DTO.order;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateOrderResponseVnPay {
  private String username;
  private String status;
  private int orderId;
  private int total;
  private String paymentStatus;
  private String message;
  private String URL;
}
