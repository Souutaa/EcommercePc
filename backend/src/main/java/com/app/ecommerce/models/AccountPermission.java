package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "account_permission")
public class AccountPermission extends BaseEntity {
    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;

    // ------------- Mapping -------------
    @ManyToOne(fetch=FetchType.LAZY)
    private Permission permission;

    @ManyToOne(fetch=FetchType.LAZY)
    private AccountType accountType;

    public AccountType getAccountType() {
        return this.accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public Permission getPermission() {
        return this.permission;
    }

    public void setPermission(Permission permission) {
        this.permission = permission;
    }

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

}
