package com.app.ecommerce.services.implement;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.AccountDetail;
import com.app.ecommerce.respositories.AccountDetailRepository;
import com.app.ecommerce.services.IAccountDetailServices;

@Service
public class AccountDetailServicesImp implements IAccountDetailServices {

    @Autowired
    private AccountDetailRepository repo;

    @Override
    public AccountDetail saveAccount(AccountDetail account) {
        return repo.save(account);
    }

    @Override
    public AccountDetail getAccountById(int accountId) {
        Optional<AccountDetail> opt = repo.findByAccountId(accountId);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("Accpimtszjio with Id : " + accountId + " Not Found");
        }
    }

}
