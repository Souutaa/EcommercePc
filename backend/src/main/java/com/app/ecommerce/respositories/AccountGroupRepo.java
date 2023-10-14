package com.app.ecommerce.respositories;

import java.util.Optional;

import com.app.ecommerce.models.AccountGroup;
import org.springframework.data.repository.CrudRepository;

public interface AccountGroupRepo extends CrudRepository<AccountGroup, Integer> {
    
}
