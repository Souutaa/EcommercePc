package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail extends BaseEntity {

    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    // @Column(name = "product_id", length = 50, nullable = false)
    // private String productId;

    @Column(name = "purchase_price", length = 11, nullable = false)
    private int purchasePrice;

    @Column(name = "purchase_discount", length = 11, nullable = false, columnDefinition = "integer default 0")
    private int purchaseDiscount;

    // ---------- Mapping -----------
    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    private AccountOrder userOrder;

    // @OneToOne(mappedBy = "ORDERDETAIL")
    // private productWarranty PRODUCTWARRANTY;

    // public productWarranty getPRODUCTWARRANTY() {
    //     return PRODUCTWARRANTY;
    // }

    // public void setPRODUCTWARRANTY(productWarranty pRODUCTWARRANTY) {
    //     PRODUCTWARRANTY = pRODUCTWARRANTY;
    // }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

     public AccountOrder getOrder() {
        return userOrder;
    }

    public void setOrder(AccountOrder userOrder) {
        this.userOrder = userOrder;
    }

    // public String getProductId() {
    //     return productId;
    // }

    // public void setProductId(String productId) {
    //     this.productId = productId;
    // }

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