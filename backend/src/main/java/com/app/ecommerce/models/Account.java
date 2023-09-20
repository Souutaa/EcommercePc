package com.app.ecommerce.models;

import java.sql.Date;
import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String Username;
    private String Password;
    private Timestamp Created_at;
    private Timestamp Modified_at;
    private Date Deleted_at;

    public String getUsername() {
        return Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public Timestamp getCreate_at() {
        return Created_at;
    }

    public void setCreate_at(Timestamp Created_at) {
        this.Created_at = Created_at;
    }

    public Timestamp getModified_at() {
        return Modified_at;
    }

    public void setModified_at(Timestamp Modified_at) {
        this.Modified_at = Modified_at;
    }

    public Date getDeleted_at() {
        return Deleted_at;
    }

    public void setDeleted_at(Date Deleted_at) {
        this.Deleted_at = Deleted_at;
    }
}