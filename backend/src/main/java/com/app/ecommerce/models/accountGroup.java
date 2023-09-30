package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "accountGroup")
public class accountGroup extends baseEntity {

    @Column(name = "accountGroupID", length = 11, nullable = false)
    private int accountGroupID;

    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Column(name = "accounttypeid", length = 20, nullable = false)
    private String accounttypeid;

    // Mapping
    // ----------------------------------------------------------------------------
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_accountTypeID", referencedColumnName = "accountTypeID")
    private List<accountType> ACCOUNTTYPE;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_Username", referencedColumnName = "Username")
    private List<Account> ACCOUNT;

    public List<accountType> getACCOUNTTYPE() {
        return ACCOUNTTYPE;
    }

    public void setACCOUNTTYPE(List<accountType> aCCOUNTTYPE) {
        ACCOUNTTYPE = aCCOUNTTYPE;
    }

    public List<Account> getACCOUNT() {
        return ACCOUNT;
    }

    public void setACCOUNT(List<Account> aCCOUNT) {
        ACCOUNT = aCCOUNT;
    }

    // -----------------------------------------------------------------------------------
    public int getAccountGroupID() {
        return accountGroupID;
    }

    public void setAccountGroupID(int accountGroupID) {
        this.accountGroupID = accountGroupID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAccounttypeid() {
        return accounttypeid;
    }

    public void setAccounttypeid(String accounttypeid) {
        this.accounttypeid = accounttypeid;
    }

}
