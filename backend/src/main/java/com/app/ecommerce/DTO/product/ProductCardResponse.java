package com.app.ecommerce.DTO.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductCardResponse {
    private int id;
    private String productLine;
    private String productName;
    private float price;
    private float discount;
    private String thumbnailUri;
}
