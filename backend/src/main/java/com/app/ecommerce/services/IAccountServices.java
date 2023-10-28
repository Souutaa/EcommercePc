package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.models.Account;

public interface IAccountServices {
    public List<Account> getAccounts(boolean active);

    public Account saveAccount(Account account);

    public Account getAccountById(int id);

    public Account getAccountByUserName(String username);

    public Account activeCategory(String id);

    public void softDeleteAccout(int id);
}
