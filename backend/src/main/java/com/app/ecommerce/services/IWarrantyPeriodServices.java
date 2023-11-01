package com.app.ecommerce.services;

import com.app.ecommerce.models.WarrantyPeriod;

public interface IWarrantyPeriodServices {
  public WarrantyPeriod create(int months);
  public WarrantyPeriod getWarrantyPeriodById(int id);
}
