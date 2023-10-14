package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "account_order")
public class AccountOrder extends BaseEntity {
    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 11, columnDefinition = "varchar(32) default 'PENDING'")
    private OrderStatus status;

    @Column(name = "total", length = 20, nullable = false)
    private int total;

    // Mapping
    @ManyToOne(fetch = FetchType.LAZY)
    private Account account;

    @OneToMany()
    private List<OrderDetail> orderDetails;

    public List<OrderDetail> getOrderDetails() {
        return this.orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> OrderDetails) {
        this.orderDetails = OrderDetails;
    }

    public Account getAccount() {
        return this.account;
    }

    public void setAccount(Account account) {
        this.account = account;
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