package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderinfomation")
public class orderInfomation extends baseEntity {

    @Column(name = "orderInfomationID", length = 11, nullable = false)
    private int orderInfomationID;

    @Column(name = "OrderID", length = 11, nullable = false)
    private int OrderID;

    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Column(name = "fullname", length = 100, nullable = false)
    private String fullname;

    @Column(name = "address", length = 100, nullable = false)
    private String address;

    @Column(name = "note", length = 100, nullable = false)
    private String note;

    @Column(name = "email", length = 60, nullable = false)
    private String email;

    @Column(name = "phoneNumber", length = 20, nullable = false)
    private String phoneNumber;

    @OneToOne(mappedBy = "ORDERINFORMATION")
    private userOrder USERORDER;

    public int getOrderInfomationID() {
        return orderInfomationID;
    }

    public void setOrderInfomationID(int orderInfomationID) {
        this.orderInfomationID = orderInfomationID;
    }

    public int getOrderID() {
        return OrderID;
    }

    public void setOrderID(int orderID) {
        OrderID = orderID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
