package com.app.ecommerce.DTO.product;

import java.util.List;

import com.app.ecommerce.models.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetProductReponse {
  private Product product;
  private int brandId;
  private int categoryId;
  private int warrantyPeriodId;
  private String thumbnailUri;
  private List<String> imageUris;
  private List<String> productInfos;
}