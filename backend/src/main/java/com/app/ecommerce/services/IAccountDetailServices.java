package com.app.ecommerce.services;

import com.app.ecommerce.models.AccountDetail;

public interface IAccountDetailServices {
    public AccountDetail saveAccount(AccountDetail account);

    public AccountDetail getAccountById(int accountId);
}
