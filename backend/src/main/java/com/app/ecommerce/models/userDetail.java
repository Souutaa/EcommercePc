package com.app.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "userdetail")
public class userDetail extends baseEntity {
    @Column(name = "userdetailID", length = 11, nullable = false)
    private int userdetailID;

    @Column(name = "username", length = 20, nullable = false)
    private String username;

    @Column(name = "FirstName", length = 50, nullable = false)
    private String FirstName;

    @Column(name = "LastName", length = 50, nullable = false)
    private String LastName;

    @Column(name = "Email", length = 100, nullable = false)
    private String Email;

    @Column(name = "DetailedAddress", length = 30, nullable = true)
    private String DetailedAddress;

    @Column(name = "District", length = 20, nullable = false)
    private String District;

    @Column(name = "City/Province", length = 20, nullable = false)
    private String City_Province;

    @Column(name = "Phone_Number", length = 20, nullable = false)
    private String Phone_Number;

    @OneToOne(mappedBy = "USERDETAIL")
    private Account ACCOUNT;

    public int getUserdetailID() {
        return userdetailID;
    }

    public void setUserdetailID(int userdetailID) {
        this.userdetailID = userdetailID;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getDetailedAddress() {
        return DetailedAddress;
    }

    public void setDetailedAddress(String detailedAddress) {
        DetailedAddress = detailedAddress;
    }

    public String getDistrict() {
        return District;
    }

    public void setDistrict(String district) {
        District = district;
    }

    public String getCity_Province() {
        return City_Province;
    }

    public void setCity_Province(String city_Province) {
        City_Province = city_Province;
    }

    public String getPhone_Number() {
        return Phone_Number;
    }

    public void setPhone_Number(String phone_Number) {
        Phone_Number = phone_Number;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
