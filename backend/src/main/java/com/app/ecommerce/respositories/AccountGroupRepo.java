package com.app.ecommerce.respositories;

import com.app.ecommerce.models.AccountGroup;
import org.springframework.data.repository.CrudRepository;

public interface AccountGroupRepo extends CrudRepository<AccountGroup, Integer> {
    
}
