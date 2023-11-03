package com.app.ecommerce.controllers;

import java.util.List;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.config.JwtService;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.services.IAccountServices;

import lombok.RequiredArgsConstructor;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/user") // This means URL's start with /demo (after Application path)
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private IAccountServices accountServices;

    @Autowired
    private JwtService jwtService;
    
    @GetMapping(value = "/allUser")
    public @ResponseBody ResponseEntity<Object> getUsers(@RequestParam Boolean active) {
        try {
            List<Account> listUsers = accountServices.getAccounts(active);
            return new ResponseEntity<Object>(listUsers, HttpStatus.OK);
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("Can't have any user in list");
        }
    }

    @GetMapping(value = "/getUser/{username}")
    public @ResponseBody ResponseEntity<Object> getAllAccount(@RequestParam String id, @PathVariable String username) {
        try {
            Account test = accountServices.getAccountById(Integer.parseInt(id));
            return new ResponseEntity<>(test, HttpStatus.OK);
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("user not found");
        }
    }

    @GetMapping(value = "/getInfo")
    public @ResponseBody ResponseEntity<Object> getLoggedIntUser(@RequestHeader("Authorization") String authorization) {
        try {
            String token = authorization.split(" ")[1].trim();
            String username = this.jwtService.extractUsername(token);
            Account fetchedAccount = accountServices.getAccountByUserName(username);
            return new ResponseEntity<>(fetchedAccount, HttpStatus.OK);
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("user not found");
        }
    }
    @PatchMapping(value = "/activeUser/{id}")
    public ResponseEntity<Account> activeUser(@PathVariable String id) {
        return ResponseEntity.ok(accountServices.activeCategory(id));
    }

    @DeleteMapping(value = "/deleteUser")
    public void deleteUser(@RequestParam String id) {
        accountServices.softDeleteAccout(Integer.parseInt(id));
    }
}
