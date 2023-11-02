package com.app.ecommerce.services;

import com.app.ecommerce.DTO.warrantyPeriod.UpdateWarrantyRequest;
import com.app.ecommerce.models.WarrantyPeriod;

public interface IWarrantyPeriodServices {
  public WarrantyPeriod create(int months);

  public WarrantyPeriod getWarrantyPeriodById(int id);

  public WarrantyPeriod updateWarrantyPeriod(int id, UpdateWarrantyRequest request);

  public void softDeleteWarrantyPeriod(int id);
}
