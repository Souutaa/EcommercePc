package com.app.ecommerce.decorators.validator;

import java.lang.reflect.Field;

import com.app.ecommerce.decorators.Equals;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class EqualsValidator implements ConstraintValidator<Equals, Object>{
  private String fieldName;

  @Override
  public void initialize(Equals constraintAnnotation) {
      fieldName = constraintAnnotation.fieldName();
  }

  @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {
        try {
            Field password = value.getClass().getDeclaredField(fieldName);
            Field confirmPassword = value.getClass().getDeclaredField("confirmPassword");
            
            password.setAccessible(true);
            confirmPassword.setAccessible(true);

            String passwordVal = (String) password.get(value);
            String confirmVal = (String) confirmPassword.get(value);

            if (!passwordVal.equals(confirmVal))
              throw new Exception("Confirm password must match password");
            return true; 
        } catch (Exception e) {
            return false;
        }
    }


}
