package com.app.ecommerce.DTO.auth;

import com.app.ecommerce.decorators.Equals;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
  @NotEmpty
  private String username;

  @Email
  private String email;

  @Min(4)
  @NotEmpty
  @Pattern(regexp = "/((?=.*\\d)|(?=.*\\W+))(?![.\\n" + //
        "])(?=.*[A-Z])(?=.*[a-z]).*$/", 
      message = "password must contain at least on upper character," +
        " 1 special character and 1 numbers")
  private String password;

  @Equals(message = "passwords must match")
  private String confirmPassword;
}
