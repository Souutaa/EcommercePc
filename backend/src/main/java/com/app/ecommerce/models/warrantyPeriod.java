package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "warrantyperiod")
public class warrantyPeriod extends baseEntity {
    @Column(name = "WarrantyID", length = 20, nullable = false, unique = true)
    private String WarrantyID;

    @Column(name = "Months", length = 11, nullable = false)
    private int Months;

    public String getWarrantyID() {
        return WarrantyID;
    }

    public void setWarrantyID(String warrantyID) {
        WarrantyID = warrantyID;
    }

    public int getMonths() {
        return Months;
    }

    public void setMonths(int months) {
        Months = months;
    }
}