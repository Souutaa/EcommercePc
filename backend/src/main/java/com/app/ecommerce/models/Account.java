package com.app.ecommerce.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.*;

@Entity
@Table(name = "account")
public class Account extends BaseEntity {
    @Id
    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Column(name = "password", length = 20, nullable = false)
    private String password;

    // Mapping -----------------------------------------------------------
    // @JoinColumn(name = "fk_username", referencedColumnName = "username")
    // @OneToOne(cascade = CascadeType.ALL)
    // private userDetail;

    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "fk_Username", referencedColumnName = "Username")
    // private List<userOrder> USERORDER;

    // @OneToMany(mappedBy = "ACCOUNT", cascade = CascadeType.ALL)
    // private List<AccountGroup> ACCOUNTGROUP;
    @OneToMany(mappedBy="account")
    private List<AccountGroup> accountGroups;

    @OneToMany(mappedBy = "account")
    private List<AccountDetail> accountDetails; 

    // public userDetail getUSERDETAIL() {
    //     return USERDETAIL;
    // }

    // public void setUSERDETAIL(userDetail userDetail) {
    //     this.USERDETAIL = userDetail;
    // }

    // public List<userOrder> getUSERORDER() {
    //     return USERORDER;
    // }

    // public void setUSERORDER(List<userOrder> uSERORDER) {
    //     USERORDER = uSERORDER;
    // }

    public List<AccountGroup> getAccountGroups() {
        return this.accountGroups;
    }

    public void setACCOUNTGROUP(List<AccountGroup> accountGroups) {
        this.accountGroups = accountGroups;
    }

    // ----------------------------------------------------------------------

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}