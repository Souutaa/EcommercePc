package com.app.ecommerce.models;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "product_warranty")
public class ProductWarranty extends BaseEntity {

    @Id
    @Column(name = "product_id", length = 50, nullable = false)
    private String productId;

    @Column(name = "purchased_at", nullable = true)
    private Date purchasedAt;

    @Column(name = "warranty_period", nullable = true)
    private Date warrantyPeriod;

    @Column(name = "product_line", length = 50, nullable = false)
    private String productLine;

    // Mapping
    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_ProductId", referencedColumnName = "ProductId")
    // private orderDetail ORDERDETAIL;

    // public orderDetail getORDERDETAIL() {
    //     return ORDERDETAIL;
    // }

    // public void setORDERDETAIL(orderDetail oRDERDETAIL) {
    //     ORDERDETAIL = oRDERDETAIL;
    // }
    //

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
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

    public String getProductLine() {
        return productLine;
    }

    public void setProductLine(String productLine) {
        this.productLine = productLine;
    }

}