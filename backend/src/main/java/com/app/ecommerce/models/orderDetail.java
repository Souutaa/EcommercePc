package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderdetail")
public class orderDetail extends baseEntity {

    @Column(name = "OrderID", length = 11, nullable = false)
    private int OrderID;

    @Column(name = "ProductId", length = 50, nullable = false)
    private String ProductId;

    @Column(name = "purchasePrice", length = 11, nullable = false)
    private int purchasePrice;

    @Column(name = "purchaseDiscount", length = 11, nullable = false, columnDefinition = "integer default 0")
    private int purchaseDiscount;

    @OneToOne(mappedBy = "ORDERDETAIL")
    private productWarranty PRODUCTWARRANTY;

    public productWarranty getPRODUCTWARRANTY() {
        return PRODUCTWARRANTY;
    }

    public void setPRODUCTWARRANTY(productWarranty pRODUCTWARRANTY) {
        PRODUCTWARRANTY = pRODUCTWARRANTY;
    }

    public int getOrderID() {
        return OrderID;
    }

    public void setOrderID(int orderID) {
        OrderID = orderID;
    }

    public String getProductId() {
        return ProductId;
    }

    public void setProductId(String productId) {
        ProductId = productId;
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
