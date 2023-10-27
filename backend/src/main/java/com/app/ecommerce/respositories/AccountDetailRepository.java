package com.app.ecommerce.respositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.ecommerce.models.AccountDetail;

public interface AccountDetailRepository extends JpaRepository<AccountDetail, Integer> {
    @Query(value = "select * from account_detail where account_id = ?1", nativeQuery = true)
    Optional<AccountDetail> findByAccountId(Integer accountId);

    @Query(value = "select * from account_detail where deleted_at is null", nativeQuery = true)
    List<AccountDetail> findAllAccountDetailActive();

    @Query(value = "select * from account_detail where deleted_at is not null", nativeQuery = true)
    List<AccountDetail> findAllAccountDetailNotActive();
}
