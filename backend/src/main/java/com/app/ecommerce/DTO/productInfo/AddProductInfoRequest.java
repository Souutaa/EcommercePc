package com.app.ecommerce.DTO.productInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddProductInfoRequest {
  private String productLine;
  private String[] infos;
}