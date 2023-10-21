package com.app.ecommerce.models;

import java.util.List;

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
@Table(name = "product")
public class Product extends BaseEntity {

    @Column(name = "product_line", length = 50, nullable = false, unique = true)
    private String productLine;

    @Column(name = "product_name", length = 150, nullable = false)
    private String productName;

    @Column(name = "thumbnail", length = 50, nullable = false)
    private String thumbnail;

    @Column(name = "price", length = 10, nullable = false)
    private int price;

    @Column(name = "discount", length = 3, nullable = false, columnDefinition = "integer default 0")
    private int discount;
    
    @ManyToOne(fetch = FetchType.LAZY)
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    @OneToMany()
    private List<ProductImage> productImages;

    @OneToMany()
    private List<ProductInfo> productInfos;

    @OneToMany()
    private List<ProductWarranty> productWarranties;

    @OneToOne(optional=false, fetch=FetchType.LAZY)
    private WarrantyPeriod warrantyPeriod;
}