package com.app.ecommerce.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.accountDetail.CreateAccountDetailDTO;
import com.app.ecommerce.DTO.auth.AuthenticationRequest;
import com.app.ecommerce.DTO.auth.AuthenticationResponse;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.models.AccountDetail;
import com.app.ecommerce.services.IAccountDetailServices;
import com.app.ecommerce.services.IAccountServices;

import lombok.RequiredArgsConstructor;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/user") // This means URL's start with /demo (after Application path)
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private IAccountServices accountServices;
    @Autowired
    private IAccountDetailServices accountDetailServices;

    @GetMapping(value = "/getUser")
    public @ResponseBody ResponseEntity<Object> getAllAccount(@RequestParam String id) {
        Account test = accountServices.getAccountById(Integer.parseInt(id));
        return new ResponseEntity<>(test, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Object> getAccountDetail(@PathVariable String id) {
        AccountDetail accountDetail = accountDetailServices.getAccountById(Integer.parseInt(id));
        return new ResponseEntity<Object>(accountDetail, HttpStatus.OK);
    }

    @PostMapping(value = "/createUserDetail")
    public ResponseEntity<AccountDetail> CreateAccountDetailDTO(
            @RequestBody CreateAccountDetailDTO accountDetailDTO) {
        return ResponseEntity.ok(accountDetailServices.saveAccount(accountDetailDTO));
    }
}
