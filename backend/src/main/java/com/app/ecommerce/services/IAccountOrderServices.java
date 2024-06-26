package com.app.ecommerce.services;

import java.io.UnsupportedEncodingException;
import java.sql.SQLException;
import java.util.List;

import com.app.ecommerce.DTO.order.CreateOrderRequest;
import com.app.ecommerce.DTO.order.MonthlyRevenue;
import com.app.ecommerce.DTO.order.OrderDetailResponse;
import com.app.ecommerce.DTO.order.TopEmployeeDTO;
import com.app.ecommerce.DTO.order.TrustedBuyer;
import com.app.ecommerce.DTO.order.UpdatePaymentStatus;
import com.app.ecommerce.DTO.order.UpdateStatusRequest;
import com.app.ecommerce.models.AccountOrder;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

public interface IAccountOrderServices {
    public AccountOrder createOrder(CreateOrderRequest request, String username)
            throws NumberFormatException, SQLException, MessagingException, UnsupportedEncodingException;

    public AccountOrder createOrderPayment(CreateOrderRequest request, String username)
            throws NumberFormatException, SQLException, MessagingException, UnsupportedEncodingException;
        public AccountOrder createOrderVNPay(CreateOrderRequest request, String username, String vnpOrderId)
            throws NumberFormatException, SQLException, MessagingException, UnsupportedEncodingException;

    public List<AccountOrder> getAllOrders();

    public List<AccountOrder> getOrders(String username);

    public AccountOrder getOrderByUsername(String username);

    public AccountOrder updateOrderStatus(@Valid UpdateStatusRequest request);

    public AccountOrder updateOrderPaymentStatus(@Valid UpdatePaymentStatus request);

    public AccountOrder cancelOrder(Integer orderId);

    public AccountOrder confirmOrder(Integer orderId, String username);

    public OrderDetailResponse getOrderDetail(String username, Integer orderId);

    public List<MonthlyRevenue> getMongMonthlyRevenues();

    public List<TrustedBuyer> getTrustedBuyers();

    public List<TopEmployeeDTO> getTopEmployees();
}
