package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "warranty_period")
public class WarrantyPeriod extends BaseEntity {
    @Column(name = "months", length = 11, nullable = false)
    private int months;

    public int getMonths() {
        return this.months;
    }

    public void setMonths(int months) {
        this.months = months;
    }
}