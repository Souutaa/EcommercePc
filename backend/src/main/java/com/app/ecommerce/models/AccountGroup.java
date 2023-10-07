package com.app.ecommerce.models;

import java.util.List;
import java.util.concurrent.Flow.Publisher;

import jakarta.persistence.*;

@Entity
@Table(name = "account_group")
public class AccountGroup extends BaseEntity {
    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;
    
    // Mapping
    // ----------------------------------------------------------------------------
    @ManyToOne(fetch=FetchType.LAZY)
    Account account;

    @ManyToOne(fetch=FetchType.LAZY)
    AccountType accountType;

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    // -----------------------------------------------------------------------------------
    
    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }
    
    // public String getUsername() {
    //     return username;
    // }

    // public void setUsername(String username) {
    //     this.username = username;
    // }
}
