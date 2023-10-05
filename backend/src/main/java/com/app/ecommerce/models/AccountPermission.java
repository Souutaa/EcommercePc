package com.app.ecommerce.models;

import jakarta.persistence.*;

@Entity
@Table(name = "account_permission")
public class AccountPermission extends BaseEntity {
    @Id
    @Column(name = "id", length = 11, nullable = false)
    private int id;

    // ------------- Mapping -------------
    @ManyToOne(fetch=FetchType.LAZY)
    private Permission permission;

    @ManyToOne(fetch=FetchType.LAZY)
    private AccountType accountType;

    // @Column(name = "permission_id", length = 10, nullable = false)
    // private String permissionId;

    // @Column(name = "type_iD", length = 20, nullable = false)
    // private String typeId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // public String getPermissionId() {
    //     return permissionId;
    // }

    // public void setPermissionId(String permissionId) {
    //     this.permissionId = permissionId;
    // }

    // public String getTypeId() {
    //     return typeId;
    // }

    // public void setTypeId(String typeId) {
    //     this.typeId = typeId;
    // }

}
