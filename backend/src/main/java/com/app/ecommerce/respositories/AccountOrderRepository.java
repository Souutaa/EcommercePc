package com.app.ecommerce.respositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.ecommerce.models.AccountOrder;

public interface AccountOrderRepository extends JpaRepository<AccountOrder, Integer> {
    List<AccountOrder> findByUsername(String username);

    @Query(value = "SELECT * from account_order where username = ?1 LIMIT 1", nativeQuery = true)
    Optional<AccountOrder> findUsername(String username);
}
