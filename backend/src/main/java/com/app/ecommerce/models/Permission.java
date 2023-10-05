package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "permission")
public class Permission extends BaseEntity {

    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @Column(name = "description", length = 50, nullable = true)
    private String description;

    @Column(name = "disable", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int disable;

    // @Column(name = "permission_group_Id", length = 11, nullable = false)
    // private int permissionGroupID;

    // Mapping -------------------------------------------------------

    @ManyToOne(fetch = FetchType.LAZY)
    private PermissionGroup permissionGroup;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_PermissionID", referencedColumnName = "PermissionID")
    // private List<accountPermission> ACCOUNTPERMISSION;

    // public List<accountPermission> getACCOUNTPERMISSION() {
    //     return ACCOUNTPERMISSION;
    // }

    // public void setACCOUNTPERMISSION(List<accountPermission> aCCOUNTPERMISSION) {
    //     ACCOUNTPERMISSION = aCCOUNTPERMISSION;
    // }

    // -------------------------------------------------------------

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    // public PermissionGroup getPermissionGroup() {
    //     return permissionGroup;
    // }

    // public void setPermissionGroup(PermissionGroup permissionGroup) {
    //     this.permissionGroup = permissionGroup;
    // }

}