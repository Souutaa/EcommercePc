package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "account_permission")
public class AccountPermission extends BaseEntity {
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
}
