package com.app.ecommerce.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "account")
public class Account extends BaseEntity {

    @Column(name = "username", length = 20, nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    // Mapping -----------------------------------------------------------
    @OneToMany(mappedBy="account")
    private List<AccountGroup> accountGroups;

    @OneToMany(mappedBy = "account")
    private List<AccountDetail> accountDetails;

    @OneToMany(mappedBy = "account")
    private List<AccountOrder> accountOrders;

    public List<AccountGroup> getAccountGroups() {
        return this.accountGroups;
    }

    public void setAccountGroups(List<AccountGroup> accountGroups) {
        this.accountGroups = accountGroups;
    }

    public List<AccountDetail> getAccountDetails() {
        return this.accountDetails;
    }

    public void setAccountDetails(List<AccountDetail> accountDetails) {
        this.accountDetails = accountDetails;
    }

    public List<AccountOrder> getAccountOrders() {
        return this.accountOrders;
    }

    public void setAccountOrders(List<AccountOrder> accountOrders) {
        this.accountOrders = accountOrders;
    }
    // ----------------------------------------------------------------------
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}