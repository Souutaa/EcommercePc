package com.app.ecommerce.DTO.product;

import java.util.List;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetProductReponse {
  @NotEmpty
  private String productLine;
  @NotEmpty
  private String productName;
  private String thumbnailUri;
  private List<String> imageUris;
}
