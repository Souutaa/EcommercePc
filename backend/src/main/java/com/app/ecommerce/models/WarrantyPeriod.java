package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "warranty_period")
public class WarrantyPeriod extends BaseEntity {
    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;

    @Column(name = "months", length = 11, nullable = false)
    private int months;

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public int getMonths() {
        return this.months;
    }

    public void setMonths(int months) {
        this.months = months;
    }
}