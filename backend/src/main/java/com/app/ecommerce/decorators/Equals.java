package com.app.ecommerce.decorators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Payload;

@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface Equals {
  String message();

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};
}
