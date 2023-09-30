package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "productimage")
public class productImage extends baseEntity {
    @Column(name = "ImageID", length = 11, nullable = false, unique = true)
    private int ImageID;

    @Column(name = "Product_Line", length = 50, nullable = false)
    private String Product_Line;

    @Column(name = "ImgPath", length = 50, nullable = false)
    private String ImgPath;

    public int getImageID() {
        return ImageID;
    }

    public void setImageID(int imageID) {
        ImageID = imageID;
    }

    public String getProduct_Line() {
        return Product_Line;
    }

    public void setProduct_Line(String product_Line) {
        Product_Line = product_Line;
    }

    public String getImgPath() {
        return ImgPath;
    }

    public void setImgPath(String imgPath) {
        ImgPath = imgPath;
    }

}
