package com.app.ecommerce.services.implement;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public List<Account> getAccounts(boolean active) {
        if (active == true) {
            return repo.findAllAccountActive();
        }
        return repo.findAll();
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

    @Override
    public Account activeCategory(String id) {
        Optional<Account> accountFound = repo.findById(Integer.parseInt(id));
        if (accountFound.isPresent()) {
            // Get value accoutFound
            var account = accountFound.get();
            account.setDeletedAt(null);
            return repo.save(account);
        } else {
            throw new ResourceNotFoundException("Account with Id : " + id + " Not Found To Delete");
        }
    }

    @Override
    public void softDeleteAccout(int id) {
        Optional<Account> accountFound = repo.findById(id);
        if (accountFound.isPresent()) {
            // Create date
            Date date = new Date();
            Timestamp timestamp = new Timestamp(date.getTime());

            // Get value accoutFound
            var account = accountFound.get();
            account.setDeletedAt(timestamp);
            repo.save(account);
        } else {
            throw new ResourceNotFoundException("Account with Id : " + id + " Not Found To Delete");
        }
    }

}
