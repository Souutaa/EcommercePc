package com.app.ecommerce.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.AccountOrder;

public interface AccountOrderRepository extends JpaRepository<AccountOrder, Integer> {
  
}
