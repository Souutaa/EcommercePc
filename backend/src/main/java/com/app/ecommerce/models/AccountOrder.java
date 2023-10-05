package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "account_order")
public class AccountOrder extends BaseEntity {
    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 11, columnDefinition = "varchar(32) default 'PENDING'")
    private OrderStatus status;

    @Column(name = "total", length = 20, nullable = false)
    private int total;

    // Mapping
    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_orderInfomationID", referencedColumnName = "orderInfomationID")
    // private orderInfomation ORDERINFORMATION;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_OrderID", referencedColumnName = "OrderID")
    // private List<orderDetail> ORDERDETAIL;

    // public orderInfomation getORDERINFORMATION() {
    //     return ORDERINFORMATION;
    // }

    // public void setORDERINFORMATION(orderInfomation oRDERINFORMATION) {
    //     ORDERINFORMATION = oRDERINFORMATION;
    // }

    // public List<orderDetail> getORDERDETAIL() {
    //     return ORDERDETAIL;
    // }

    // public void setORDERDETAIL(List<orderDetail> oRDERDETAIL) {
    //     ORDERDETAIL = oRDERDETAIL;
    // }

    //
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}