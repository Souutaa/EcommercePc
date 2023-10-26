package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.DTO.accountDetail.CreateAccountDetailDTO;
import com.app.ecommerce.DTO.accountDetail.UpdateAccountDetailDTO;
import com.app.ecommerce.models.AccountDetail;

public interface IAccountDetailServices {
    public List<AccountDetail> getAllAccountDetails();

    public List<AccountDetail> getAccountDetailActive();

    public List<AccountDetail> getAccountDetailNotActive();

    public AccountDetail saveAccountDetail(CreateAccountDetailDTO accountDetail);

    public AccountDetail updateAccountDetail(String id, UpdateAccountDetailDTO accountDetail);

    public void deleteAccountDetail(int id);

    public void softDeleteAcouuAccountDetail(int id);

    public AccountDetail getAccountDetailById(int accountDetailId);
}