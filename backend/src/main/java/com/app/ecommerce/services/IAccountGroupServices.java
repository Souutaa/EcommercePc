package com.app.ecommerce.services;

import com.app.ecommerce.models.AccountGroup;

public interface IAccountGroupServices {
    public AccountGroup saveAccountGroup(AccountGroup accountGroup);
    public AccountGroup getAccountGroupById(int id);
    public AccountGroup updateAccountGroupById(int id);
}
