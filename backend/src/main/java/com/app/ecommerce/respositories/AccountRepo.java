package com.app.ecommerce.respositories;

import org.springframework.data.repository.CrudRepository;

import com.app.ecommerce.models.Account;

public interface AccountRepo extends CrudRepository<Account, Integer> {
    
}
