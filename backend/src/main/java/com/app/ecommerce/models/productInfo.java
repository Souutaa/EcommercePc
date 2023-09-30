package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "productimage")
public class productInfo extends baseEntity {
    @Column(name = "Info_ID", length = 11, nullable = false)
    private int Info_ID;

    @Column(name = "Product_Line", length = 50, nullable = false)
    private String Product_Line;

    @Column(name = "Product_Infomation", nullable = false)
    private String Product_Infomation;

    public int getInfo_ID() {
        return Info_ID;
    }

    public void setInfo_ID(int info_ID) {
        Info_ID = info_ID;
    }

    public String getProduct_Line() {
        return Product_Line;
    }

    public void setProduct_Line(String product_Line) {
        Product_Line = product_Line;
    }

    public String getProduct_Infomation() {
        return Product_Infomation;
    }

    public void setProduct_Infomation(String product_Infomation) {
        Product_Infomation = product_Infomation;
    }

}
