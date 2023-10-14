package com.app.ecommerce.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "account_detail")
public class AccountDetail extends BaseEntity {

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;

    @Column(name = "email", length = 100, nullable = false)
    private String email;

    @Column(name = "detailed_address", length = 30, nullable = true)
    private String detailedAddress;

    @Column(name = "district", length = 20, nullable = false)
    private String district;

    @Column(name = "city", length = 20, nullable = false)
    private String city;

    @Column(name = "phone_number", length = 20, nullable = false)
    private String phoneNumber;

    @Column(name = "is_default", columnDefinition = "boolean default false")
    private boolean isDefault;


    // Mapping ---------------
    @ManyToOne(fetch = FetchType.LAZY)
    private Account account;

    public Account getAccount() {
        return this.account;
    }

    public void setAccount(Account Account) {
        this.account = Account;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDetailedAddress() {
        return detailedAddress;
    }

    public void setDetailedAddress(String detailedAddress) {
        this.detailedAddress = detailedAddress;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(boolean isDefault) {
        this.isDefault = isDefault;
    }

}