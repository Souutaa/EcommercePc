package com.app.ecommerce.services.implement;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.respositories.WarrantyPeriodRepository;
import com.app.ecommerce.services.IWarrantyPeriodServices;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.WarrantyPeriod;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WarrantyPeriodServices implements IWarrantyPeriodServices {

  @Autowired
  private final WarrantyPeriodRepository warrantyPeriodRepository;

  @Override
  public WarrantyPeriod create(int months) {
    return this.warrantyPeriodRepository.save(WarrantyPeriod.builder().months(months).build());
  }

  @Override
  public WarrantyPeriod getWarrantyPeriodById(int id) {
    Optional<WarrantyPeriod> opt = this.warrantyPeriodRepository.findById(id);
    if (!opt.isPresent()) {
      throw new ResourceNotFoundException("Warranty Period not found");
    }
    return opt.get();
  }
  
}
