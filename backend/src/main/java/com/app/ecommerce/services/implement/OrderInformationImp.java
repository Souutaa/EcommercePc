package com.app.ecommerce.services.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.models.OrderInformation;
import com.app.ecommerce.respositories.OrderInformationRepository;
import com.app.ecommerce.services.IOrderInformationServices;

@Service
public class OrderInformationImp implements IOrderInformationServices {

  @Autowired
  private OrderInformationRepository orderInformationRepository;

  @Override
  public OrderInformation createOrderInformation(OrderInformation orderInformation) {
    return this.orderInformationRepository.save(orderInformation);
  }
  
}
