package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "permission_group")
public class PermissionGroup extends BaseEntity {

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Column(name = "description", length = 100, nullable = true)
    private String description;

    @Column(name = "is_disabled", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int isDisabled;

    // Mapping
    // ------------------------------------------------------------------------------------
    @OneToMany(mappedBy = "permissionGroup")
    private List<Permission> permissions;

    // ----------------------------------------------------------------------------

    public String getName() {
        return name;
    }

    public void setName(String permissionGroupName) {
        this.name = permissionGroupName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getIsDisabled() {
        return isDisabled;
    }

    public void setIsDisable(int isDisabled) {
        this.isDisabled = isDisabled;
    }

    public List<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }

}