package com.app.ecommerce.respositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.AccountOrder;

public interface AccountOrderRepository extends JpaRepository<AccountOrder, Integer> {
    List<AccountOrder> findByUsername(String username);
}
