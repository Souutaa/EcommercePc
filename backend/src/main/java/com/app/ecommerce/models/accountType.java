package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "accounttype")
public class accountType extends baseEntity {

    @Column(name = "accountTypeID", length = 20, nullable = false, unique = true)
    private String accountTypeID;

    @Column(name = "TypeName", length = 50, nullable = false)
    private String TypeName;

    @Column(name = "Description", length = 100, nullable = true)
    private String Description;

    @Column(name = "Delete_able", length = 1, nullable = false, columnDefinition = "integer default 1")
    private int Delete_able;

    @Column(name = "Disabled", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int Disabled;

    // Mapping ---------------------------------------------------
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_accountTypeID", referencedColumnName = "accountTypeID")
    private List<accountPermission> ACCOUNTPERMISSION;

    public List<accountPermission> getACCOUNTPERMISSION() {
        return ACCOUNTPERMISSION;
    }

    public void setACCOUNTPERMISSION(List<accountPermission> aCCOUNTPERMISSION) {
        ACCOUNTPERMISSION = aCCOUNTPERMISSION;
    }

    // --------------------------------------------------------------
    public String getAccountTypeID() {
        return accountTypeID;
    }

    public void setAccountTypeID(String accountTypeID) {
        this.accountTypeID = accountTypeID;
    }

    public String getTypeName() {
        return TypeName;
    }

    public void setTypeName(String typeName) {
        TypeName = typeName;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getDelete_able() {
        return Delete_able;
    }

    public void setDelete_able(int delete_able) {
        Delete_able = delete_able;
    }

    public int getDisabled() {
        return Disabled;
    }

    public void setDisabled(int disabled) {
        Disabled = disabled;
    }

}
