package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper=false)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "account_order")
public class AccountOrder extends BaseEntity {
    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 11, columnDefinition = "varchar(32) default 'PENDING'")
    private OrderStatus status;

    @Column(name = "total", length = 20, nullable = false)
    private int total;

    // Mapping
    @ManyToOne(fetch = FetchType.LAZY)
    private Account account;

    @OneToMany()
    private List<OrderDetail> orderDetails;
}