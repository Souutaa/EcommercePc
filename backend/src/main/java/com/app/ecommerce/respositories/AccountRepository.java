package com.app.ecommerce.respositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);
    
}
