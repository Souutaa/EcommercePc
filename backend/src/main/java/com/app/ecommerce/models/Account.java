package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "account")
public class Account extends baseEntity {

    @Column(name = "Username", length = 20, nullable = false)
    private String Username;

    @Column(name = "Password", length = 20, nullable = false)
    private String Password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_username", referencedColumnName = "username")
    private userDetail USERDETAIL;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_Username", referencedColumnName = "Username")
    private List<userOrder> USERORDER;

    public userDetail getUSERDETAIL() {
        return USERDETAIL;
    }

    public void setUSERDETAIL(userDetail uSERDETAIL) {
        USERDETAIL = uSERDETAIL;
    }

    public List<userOrder> getUSERORDER() {
        return USERORDER;
    }

    public void setUSERORDER(List<userOrder> uSERORDER) {
        USERORDER = uSERORDER;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

}