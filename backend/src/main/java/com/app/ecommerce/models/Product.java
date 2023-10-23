package com.app.ecommerce.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
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
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    @JsonBackReference
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @JsonBackReference
    private Category category;

    @OneToMany()
    @JsonManagedReference
    private List<ProductImage> productImages;

    @OneToMany()
    @JsonManagedReference
    private List<ProductInfo> productInfos;

    @OneToMany()
    @JsonManagedReference
    private List<ProductWarranty> productWarranties;

    @OneToOne(optional = false, fetch = FetchType.LAZY)
    private WarrantyPeriod warrantyPeriod;
}