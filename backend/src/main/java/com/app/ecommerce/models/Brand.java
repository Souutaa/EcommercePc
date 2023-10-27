package com.app.ecommerce.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "brand")
public class Brand extends BaseEntity {
    @Column(name = "brand_name", length = 20, nullable = false)
    private String brandName;

    // Mapping
    @OneToMany(mappedBy = "brand")
    @JsonManagedReference
    private List<Product> products;

}
