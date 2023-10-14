package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "permission")
public class Permission extends BaseEntity {

    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @Column(name = "description", length = 50, nullable = true)
    private String description;

    @Column(name = "disable", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int disable;

    // Mapping -------------------------------------------------------

    @ManyToOne(fetch = FetchType.LAZY)
    private PermissionGroup permissionGroup;

    public PermissionGroup getPermissionGroup() {
        return this.permissionGroup;
    }

    public void setPermissionGroup(PermissionGroup permissionGroup) {
        this.permissionGroup = permissionGroup;
    }

    // -------------------------------------------------------------

    public String getName() {
        return name;
    }

    public void setName(String permissionName) {
        name = permissionName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDisable() {
        return disable;
    }

    public void setDisable(int disable) {
        this.disable = disable;
    }

}