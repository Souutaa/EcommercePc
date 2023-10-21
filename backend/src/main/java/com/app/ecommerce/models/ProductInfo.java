package com.app.ecommerce.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper=false)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product_info")
public class ProductInfo extends BaseEntity {
    @Column(name = "product_information", nullable = false)
    private String productInformation;
    
    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;
}