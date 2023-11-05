package com.app.ecommerce.DTO.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateProductLineRequest {
  private String productLine;
  private String productName;
  private float price;
  private float discount;
  private int brandId;
  private int categoryId;
  private int warrantyPeriodId;
}
