package com.app.ecommerce.DTO.account;

import java.util.List;
import com.app.ecommerce.models.AccountGroup;
import com.app.ecommerce.models.AccountDetail;
import com.app.ecommerce.models.AccountOrder;

public class UpdateUserDTO {
    private String username;
    private String oldPassword;
    private String password;    
    private List<AccountGroup> accountGroups;
    private List<AccountDetail> accountDetails;
    private List<AccountOrder> accountOrders;

    public List<AccountGroup> getAccountGroups() {
        return this.accountGroups;
    }

    public void setAccountGroups(AccountGroup accountGroup) {
        this.accountGroups.add(accountGroup);
    }

    public List<AccountDetail> getAccountDetails() {
        return this.accountDetails;
    }

    public void setAccountDetails(List<AccountDetail> accountDetails) {
        this.accountDetails = accountDetails;
    }

    public List<AccountOrder> getAccountOrders() {
        return this.accountOrders;
    }

    public void setAccountOrders(List<AccountOrder> accountOrders) {
        this.accountOrders = accountOrders;
    }
    
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

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }
}
