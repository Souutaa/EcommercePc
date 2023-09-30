package com.app.ecommerce.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

//baseEntity nền móng cho những model khác.
@MappedSuperclass
public abstract class baseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "Created_at")
    @Temporal(TemporalType.DATE) // @Temporal use to get extremely date and time
    private Date Created_at;

    @Column(name = "Modified_at")
    @Temporal(TemporalType.DATE) // @Temporal use to get extremely date and time
    private Date Modified_at;

    @Column(name = "Delete_at")
    @Temporal(TemporalType.DATE)
    private Date Deleted_at;

    public Integer getId() {
        return id;
    }

    public Date getCreated_at() {
        return Created_at;
    }

    public void setCreated_at(Date created_at) {
        Created_at = created_at;
    }

    public Date getModified_at() {
        return Modified_at;
    }

    public void setModified_at(Date modified_at) {
        Modified_at = modified_at;
    }

    public Date getDeleted_at() {
        return Deleted_at;
    }

    public void setDeleted_at(Date deleted_at) {
        Deleted_at = deleted_at;
    }
}
