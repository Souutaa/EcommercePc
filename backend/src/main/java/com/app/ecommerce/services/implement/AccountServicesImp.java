package com.app.ecommerce.services.implement;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.respositories.AccountRepository;
import com.app.ecommerce.services.IAccountServices;

@Service
public class AccountServicesImp implements IAccountServices {

    @Autowired
    private AccountRepository repo;

    @Override
    public Account saveAccount(Account account) {
        return repo.save(account);
    }

    @Override
    public Account getAccountById(int id) {
        Optional<Account> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Account with Id : " + id + " Not Found");
        }
    }

    @Override
    public Account getAccountByUserName(String username) {
        Optional<Account> opt = repo.findByUsername(username);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("User with username : " + username + " Not Found");
        }
    }

}
