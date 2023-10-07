package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail extends BaseEntity {

    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;

    // @Column(name = "product_id", length = 50, nullable = false)
    // private String productId;

    @Column(name = "purchase_price", length = 11, nullable = false)
    private int purchasePrice;

    @Column(name = "purchase_discount", length = 11, nullable = false, columnDefinition = "integer default 0")
    private int purchaseDiscount;

    // ---------- Mapping -----------
    @ManyToOne(fetch = FetchType.LAZY)
    private ProductWarranty productWarranty;

    @ManyToOne(fetch = FetchType.LAZY)
    private AccountOrder accountOrder;

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public ProductWarranty getProductWarranty() {
        return productWarranty;
    }

    public void setProductWarranty(ProductWarranty product) {
        this.productWarranty = product;
    }

     public AccountOrder getOrder() {
        return accountOrder;
    }

    public void setOrder(AccountOrder accountOrder) {
        this.accountOrder = accountOrder;
    }

    public int getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(int purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public int getPurchaseDiscount() {
        return purchaseDiscount;
    }

    public void setPurchaseDiscount(int purchaseDiscount) {
        this.purchaseDiscount = purchaseDiscount;
    }

}