package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderstatus")
public class orderStatus extends baseEntity {

    @Column(name = "StatusID", length = 11, nullable = false)
    private int StatusID;

    @Column(name = "StatusName", length = 50, nullable = false)
    private String StatusName;

    public int getStatusID() {
        return StatusID;
    }

    public void setStatusID(int statusID) {
        StatusID = statusID;
    }

    public String getStatusName() {
        return StatusName;
    }

    public void setStatusName(String statusName) {
        StatusName = statusName;
    }

}
