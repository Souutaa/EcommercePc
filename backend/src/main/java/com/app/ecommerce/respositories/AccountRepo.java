package com.app.ecommerce.respositories;

import org.springframework.data.repository.CrudRepository;

import com.app.ecommerce.models.account;

public interface AccountRepo extends CrudRepository<account, Integer> {

}
