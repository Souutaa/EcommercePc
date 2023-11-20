package com.app.ecommerce.services.implement;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.order.UpdateStatusRequest;
import com.app.ecommerce.models.AccountOrder;
import com.app.ecommerce.models.OrderDetail;
import com.app.ecommerce.models.OrderInformation;
import com.app.ecommerce.models.OrderStatus;
import com.app.ecommerce.models.ProductWarranty;
import com.app.ecommerce.respositories.AccountOrderRepository;
import com.app.ecommerce.services.IAccountOrderServices;
import com.app.ecommerce.services.IAccountServices;
import com.app.ecommerce.services.IEmailServices;
import com.app.ecommerce.services.IOrderDetailServices;
import com.app.ecommerce.services.IOrderInformationServices;
import com.app.ecommerce.services.IProductWarrantyServices;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

@Service
public class AccountOrderServicesImp implements IAccountOrderServices {

  @Autowired
  private AccountOrderRepository accountOrderRepository;

  @Autowired
  private IProductWarrantyServices productWarrantyServices;

  @Autowired
  private IEmailServices emailServices;

  @Autowired
  private IOrderDetailServices orderDetailServices;

  @Autowired
  private IOrderInformationServices orderInformationServices;

  @Autowired
  private IAccountServices accountServices;

  @Override
  public AccountOrder createOrder(CreateOrderRequest request, String username)
      throws NumberFormatException, SQLException, MessagingException {
    AccountOrder newOrder = AccountOrder.builder().username(username).total(request.getTotal())
        .status(OrderStatus.PENDING)
        .orderDetails(orderDetailServices.createOrderDetail(request.getCartItems()))
        .build();
    AccountOrder createdOrder = this.accountOrderRepository.save(newOrder);
    OrderInformation orderInformation = OrderInformation.builder()
        .address(request.getFullAddress())
        .fullname(request.getFullName())
        .email(request.getEmail())
        .phoneNumber(request.getPhoneNumber())
        .note(request.getNote())
        .accountOrder(createdOrder)
        .username(username)
        .build();
    this.orderInformationServices.createOrderInformation(orderInformation);
    emailServices.sendOrderUser(request, username);
    return createdOrder;
  }

  @Override
  public AccountOrder updateOrderStatus(@Valid UpdateStatusRequest request) {
    AccountOrder fetchedOrder = this.accountOrderRepository.findById(request.getOrderId()).get();
    fetchedOrder.setStatus(request.getOrderStatus());
    return this.accountOrderRepository.save(fetchedOrder);
  }

  @Override
  public AccountOrder cancelOrder(Integer orderId) {
    AccountOrder fetchedOrder = this.accountOrderRepository.findById(orderId).get();
    fetchedOrder.setStatus(OrderStatus.CANCELED);
    List<OrderDetail> orderDetails = fetchedOrder.getOrderDetails();
    for (OrderDetail orderDetail : orderDetails) {
      ProductWarranty productWarranty = orderDetail.getProductWarranty();
      this.productWarrantyServices.deactiveWarranty(productWarranty.getId());
    }
    return this.accountOrderRepository.save(fetchedOrder);
  }

  @Override
  public AccountOrder confirmOrder(Integer orderId, String username) {
    AccountOrder fetchedOrder = this.accountOrderRepository.findById(orderId).get();
    fetchedOrder.setStatus(OrderStatus.CONFIRMED);
    fetchedOrder.setConfirmedBy(this.accountServices.getAccountByUserName(username));
    return this.accountOrderRepository.save(fetchedOrder);
  }
}
