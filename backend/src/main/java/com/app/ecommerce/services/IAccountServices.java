package com.app.ecommerce.services;

import com.app.ecommerce.models.Account;

public interface IAccountServices {
    public Account saveAccount(Account account);
    public Account getAccountById(int id);
    public Account getAccountByUserName(String username);
}
