package com.app.ecommerce.models;

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
@Table(name = "order_detail")
public class OrderDetail extends BaseEntity {
    @Column(name = "purchase_price", length = 11, nullable = false)
    private int purchasePrice;

    @Column(name = "purchase_discount", length = 11, nullable = false, columnDefinition = "integer default 0")
    private int purchaseDiscount;

    // ---------- Mapping -----------
    @ManyToOne(fetch = FetchType.LAZY)
    private ProductWarranty productWarranty;

    @ManyToOne(fetch = FetchType.LAZY)
    private AccountOrder accountOrder;

}