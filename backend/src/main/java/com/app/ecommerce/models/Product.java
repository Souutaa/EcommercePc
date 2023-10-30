package com.app.ecommerce.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import io.micrometer.common.lang.Nullable;
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

    @Column(name = "price", length = 10)
    private int price;

    @Column(name = "discount", length = 3, columnDefinition = "integer default 0")
    private int discount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    @JsonBackReference
    private Brand brand;

    @Nullable
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @JsonBackReference
    private Category category;

    @Nullable
    @OneToMany()
    @JsonManagedReference
    private List<ProductImage> productImages;

    @Nullable
    @OneToMany()
    @JsonManagedReference
    private List<ProductInfo> productInfos;

    @Nullable
    @OneToMany()
    @JsonManagedReference
    private List<ProductWarranty> productWarranties;

    @Nullable
    @OneToOne(optional = false, fetch = FetchType.LAZY)
    private WarrantyPeriod warrantyPeriod;
}