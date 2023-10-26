package com.app.ecommerce.decorators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.app.ecommerce.decorators.validator.EqualsValidator;

import jakarta.validation.Constraint;

@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EqualsValidator.class)
public @interface Equals {
  String fieldName();
}
