package com.app.ecommerce.services;

import com.app.ecommerce.models.Account;
import com.app.ecommerce.DTO.UpdateUserDTO;

public interface IAccountServices {
    public Account saveAccount(Account account);
    public Account getAccountById(int id);
    public Account getAccountByUserName(String username);
}
