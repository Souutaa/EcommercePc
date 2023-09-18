package com.app.ecommerce.respositories;

import org.springframework.data.repository.CrudRepository;

import com.app.ecommerce.models.User;

public interface UserRepo extends CrudRepository<User, Integer> {

}
