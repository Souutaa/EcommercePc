package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "account_type")
public class AccountType extends BaseEntity {
    // @Id
    // @Column(name = "id", length = 11, nullable = false)
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    // private int id;
    
    @Column(name = "type_name", length = 50, nullable = false)
    private String typeName;

    @Column(name = "description", length = 100, nullable = true)
    private String description;

    @Column(name = "disabled", length = 1, nullable = false, columnDefinition = "integer default 0")
    private int disabled;

    // --------------------------------------------------------------
    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDisabled() {
        return disabled;
    }

    public void setDisabled(int disabled) {
        this.disabled = disabled;
    }

}
