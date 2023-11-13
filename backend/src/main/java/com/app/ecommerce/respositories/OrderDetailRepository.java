package com.app.ecommerce.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer>{
  
}
