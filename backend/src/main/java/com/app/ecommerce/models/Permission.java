package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "permission")
public class Permission extends baseEntity {

    @Column(name = "PermissionID", length = 10, nullable = false)
    private String PermissionID;

    @Column(name = "PermissionName", length = 20, nullable = false)
    private String PermissionName;

    @Column(name = "description", length = 50, nullable = true)
    private String description;

    @Column(name = "Disable", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int Disable;

    @Column(name = "PermissionGroupID", length = 11, nullable = false)
    private int PermissionGroupID;

    // Mapping -------------------------------------------------------
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_PermissionID", referencedColumnName = "PermissionID")
    private List<accountPermission> ACCOUNTPERMISSION;

    public List<accountPermission> getACCOUNTPERMISSION() {
        return ACCOUNTPERMISSION;
    }

    public void setACCOUNTPERMISSION(List<accountPermission> aCCOUNTPERMISSION) {
        ACCOUNTPERMISSION = aCCOUNTPERMISSION;
    }

    // -------------------------------------------------------------
    public String getPermissionID() {
        return PermissionID;
    }

    public void setPermissionID(String permissionID) {
        PermissionID = permissionID;
    }

    public String getPermissionName() {
        return PermissionName;
    }

    public void setPermissionName(String permissionName) {
        PermissionName = permissionName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDisable() {
        return Disable;
    }

    public void setDisable(int disable) {
        Disable = disable;
    }

    public int getPermissionGroupID() {
        return PermissionGroupID;
    }

    public void setPermissionGroupID(int permissionGroupID) {
        PermissionGroupID = permissionGroupID;
    }

}
