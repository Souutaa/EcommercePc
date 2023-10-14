package com.app.ecommerce.services.implement;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.respositories.AccountRepo;
import com.app.ecommerce.services.IAccountServices;

@Service
public class AccountServicesImp implements IAccountServices {

    @Autowired
    private AccountRepo repo;

    @Override
    public Account saveAccount(Account account) {
        return repo.save(account);
    }

    @Override
    public Account getAccountById(int id) {
        Optional<Account> opt = repo.findById(id);
        if(opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("Invoice with Id : "+id+" Not Found");
        }
    }

    @Override
    public Account getAccountByUserName(String username) {
        Optional<Account> opt = repo.findByUsername(username);
        if(opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("User with username : "+username+" Not Found");
        }
    }

}
