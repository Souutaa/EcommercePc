package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "userorder")
public class userOrder extends baseEntity {
    @Column(name = "OrderID", length = 11, nullable = false)
    private int OrderID;

    @Column(name = "Username", length = 20, nullable = false)
    private String Username;

    @Column(name = "Status", length = 11, columnDefinition = "integer default 1")
    private int Status;

    @Column(name = "Total", length = 20, nullable = false)
    private int Total;

    @Column(name = "Confirmed_by", length = 20, nullable = true)
    private String Confirmed_by;

    // Mapping
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_orderInfomationID", referencedColumnName = "orderInfomationID")
    private orderInfomation ORDERINFORMATION;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_OrderID", referencedColumnName = "OrderID")
    private List<orderDetail> ORDERDETAIL;

    public orderInfomation getORDERINFORMATION() {
        return ORDERINFORMATION;
    }

    public void setORDERINFORMATION(orderInfomation oRDERINFORMATION) {
        ORDERINFORMATION = oRDERINFORMATION;
    }

    public List<orderDetail> getORDERDETAIL() {
        return ORDERDETAIL;
    }

    public void setORDERDETAIL(List<orderDetail> oRDERDETAIL) {
        ORDERDETAIL = oRDERDETAIL;
    }

    //
    public int getOrderID() {
        return OrderID;
    }

    public void setOrderID(int orderID) {
        OrderID = orderID;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public int getStatus() {
        return Status;
    }

    public void setStatus(int status) {
        Status = status;
    }

    public int getTotal() {
        return Total;
    }

    public void setTotal(int total) {
        Total = total;
    }

    public String getConfirmed_by() {
        return Confirmed_by;
    }

    public void setConfirmed_by(String confirmed_by) {
        Confirmed_by = confirmed_by;
    }

}
