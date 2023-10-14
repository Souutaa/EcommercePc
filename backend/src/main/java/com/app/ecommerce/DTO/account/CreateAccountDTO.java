package com.app.ecommerce.DTO.account;

public class CreateAccountDTO {
  String username;
  String password;

  public String getUsername() {
      return username;
  }

  public String getPassword() {
      return password;
  }

  public void setUsername(String username) {
      this.username = username;
  }

  public void setPassword(String password) {
      this.password = password;
  }
}
