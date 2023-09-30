package com.app.ecommerce.models;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_warranty")
public class productWarranty extends baseEntity {
    @Column(name = "product_id", length = 50, nullable = false, unique = true)
    private String product_id;

    @Column(name = "purchased_at", nullable = true)
    private Date purchased_at;

    @Column(name = "warranty_period", nullable = true)
    private Date warranty_period;

    @Column(name = "product_line", length = 50, nullable = false)
    private String product_line;

    // Mapping
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_ProductId", referencedColumnName = "ProductId")
    private orderDetail ORDERDETAIL;

    public orderDetail getORDERDETAIL() {
        return ORDERDETAIL;
    }

    public void setORDERDETAIL(orderDetail oRDERDETAIL) {
        ORDERDETAIL = oRDERDETAIL;
    }
    //

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public Date getPurchased_at() {
        return purchased_at;
    }

    public void setPurchased_at(Date purchased_at) {
        this.purchased_at = purchased_at;
    }

    public Date getWarranty_period() {
        return warranty_period;
    }

    public void setWarranty_period(Date warranty_period) {
        this.warranty_period = warranty_period;
    }

    public String getProduct_line() {
        return product_line;
    }

    public void setProduct_line(String product_line) {
        this.product_line = product_line;
    }

}
