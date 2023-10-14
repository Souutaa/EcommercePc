package com.app.ecommerce.models;

import java.util.List;
import java.util.concurrent.Flow.Publisher;

import jakarta.persistence.*;

@Entity
@Table(name = "account_group")
public class AccountGroup extends BaseEntity {
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
}
