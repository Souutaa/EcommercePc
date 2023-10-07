package com.app.ecommerce.models;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "product_warranty")
public class ProductWarranty extends BaseEntity {

    @Column(name = "product_warranty_id", length = 50, nullable = false, unique = true)
    private String productWarrantyId;

    @Column(name = "purchased_at", nullable = true)
    private Date purchasedAt;

    @Column(name = "warranty_period", nullable = true)
    private Date warrantyPeriod;

    // Mapping
    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    public Product getProduct() {
        return this.product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getProductWarrantyId() {
        return productWarrantyId;
    }

    public void setProductWarrantyId(String productWarrantyId) {
        this.productWarrantyId = productWarrantyId;
    }

    public Date getPurchasedAt() {
        return purchasedAt;
    }

    public void setPurchasedAt(Date purchasedAt) {
        this.purchasedAt = purchasedAt;
    }

    public Date getWarrantyPeriod() {
        return warrantyPeriod;
    }

    public void setWarrantyPeriod(Date warrantyPeriod) {
        this.warrantyPeriod = warrantyPeriod;
    }

}