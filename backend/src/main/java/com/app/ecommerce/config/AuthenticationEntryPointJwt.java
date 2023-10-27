package com.app.ecommerce.config;

import java.io.OutputStream;

import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.app.ecommerce.exceptions.UnauthorizedException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component("customAuthenticationEntryPoint")
public class AuthenticationEntryPointJwt implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) 
      throws IOException, ServletException {
        UnauthorizedException re = new UnauthorizedException("Authentication failed");
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        OutputStream responseStream;
        try {
          responseStream = response.getOutputStream();
          ObjectMapper mapper = new ObjectMapper();
          mapper.writeValue(responseStream, re);
          responseStream.flush();
        } catch (java.io.IOException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
    }
}
