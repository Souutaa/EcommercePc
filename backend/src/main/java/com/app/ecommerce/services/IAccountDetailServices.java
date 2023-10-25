package com.app.ecommerce.services;

import com.app.ecommerce.DTO.accountDetail.CreateAccountDetailDTO;
import com.app.ecommerce.models.AccountDetail;

public interface IAccountDetailServices {
    public AccountDetail saveAccount(CreateAccountDetailDTO accountDetail);

    public AccountDetail getAccountById(int accountDetailId);
}