package com.app.ecommerce.respositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.app.ecommerce.models.Account;

public interface AccountRepo extends CrudRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);
}
