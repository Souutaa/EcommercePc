package main.java.com.app.ecommerce.exceptions;

import org.springframework.http.HttpStatus;

public class BaseException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public BaseException(String message) {
        super(message);
    }

    @Override
    public Throwable fillInStackTrace() {
        return this;
    }
}
