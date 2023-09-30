package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "accountpermission")
public class accountPermission extends baseEntity {

    @Column(name = "accountPermissionID", length = 11, nullable = false)
    private int accountPermissionID;

    @Column(name = "PermissionID", length = 10, nullable = false)
    private String PermissionID;

    @Column(name = "TypeID", length = 20, nullable = false)
    private String TypeID;

    public int getAccountPermissionID() {
        return accountPermissionID;
    }

    public void setAccountPermissionID(int accountPermissionID) {
        this.accountPermissionID = accountPermissionID;
    }

    public String getPermissionID() {
        return PermissionID;
    }

    public void setPermissionID(String permissionID) {
        PermissionID = permissionID;
    }

    public String getTypeID() {
        return TypeID;
    }

    public void setTypeID(String typeID) {
        TypeID = typeID;
    }

}
