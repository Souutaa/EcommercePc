package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "order_information")
public class OrderInformation extends BaseEntity {

    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;

    // @Column(name = "order_id", length = 11, nullable = false)
    // private int orderId;

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

    @Column(name = "phone_number", length = 20, nullable = false)
    private String phoneNumber;

    // Mapping
    @OneToOne(optional = false, fetch=FetchType.LAZY)
    @MapsId
    private AccountOrder accountOrder;

    public AccountOrder getAccountOrder() {
        return this.accountOrder;
    }

    public void setAccountOrder(AccountOrder accountOrder) {
        this.accountOrder = accountOrder;
    }

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

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