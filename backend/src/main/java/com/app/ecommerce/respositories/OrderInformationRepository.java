package com.app.ecommerce.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.models.OrderInformation;

public interface OrderInformationRepository extends JpaRepository<OrderInformation, Integer> {
  
}
