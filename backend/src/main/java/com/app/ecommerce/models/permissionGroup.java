package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "permissiongroup")
public class permissionGroup extends baseEntity {

    @Column(name = "PermissionGroupID", length = 11, nullable = false)
    private int PermissionGroupID;

    @Column(name = "PermissionGroupName", length = 50, nullable = false)
    private String PermissionGroupName;

    @Column(name = "Description", length = 100, nullable = true)
    private String Description;

    @Column(name = "Disable", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int Disable;

    // Mapping
    // ------------------------------------------------------------------------------------
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_PermissionGroupID", referencedColumnName = "PermissionGroupID")
    private List<Permission> PERMISSION;

    public List<Permission> getPERMISSION() {
        return PERMISSION;
    }

    public void setPERMISSION(List<Permission> pERMISSION) {
        PERMISSION = pERMISSION;
    }

    // ----------------------------------------------------------------------------
    public int getPermissionGroupID() {
        return PermissionGroupID;
    }

    public void setPermissionGroupID(int permissionGroupID) {
        PermissionGroupID = permissionGroupID;
    }

    public String getPermissionGroupName() {
        return PermissionGroupName;
    }

    public void setPermissionGroupName(String permissionGroupName) {
        PermissionGroupName = permissionGroupName;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getDisable() {
        return Disable;
    }

    public void setDisable(int disable) {
        Disable = disable;
    }

}
