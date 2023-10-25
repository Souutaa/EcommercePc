package com.app.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.accountDetail.CreateAccountDetailDTO;
import com.app.ecommerce.DTO.accountDetail.UpdateAccountDetailDTO;
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

    @GetMapping(value = "/allDetailUser")
    public @ResponseBody ResponseEntity<Object> getAllAccountDetail() {
        List<AccountDetail> accountDetail = accountDetailServices.getAllAccountDetails();
        return new ResponseEntity<Object>(accountDetail, HttpStatus.OK);
    }

    @GetMapping(value = "/allDetailUser/active")
    public @ResponseBody ResponseEntity<Object> getAllAccountDetailActive() {
        List<AccountDetail> accountDetail = accountDetailServices.getAccountDetailActive();
        return new ResponseEntity<Object>(accountDetail, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Object> getAccountDetail(@PathVariable String id) {
        AccountDetail accountDetail = accountDetailServices.getAccountDetailById(Integer.parseInt(id));
        return new ResponseEntity<Object>(accountDetail, HttpStatus.OK);
    }

    @PostMapping(value = "/createUserDetail")
    public ResponseEntity<AccountDetail> CreateAccountDetailDTO(
            @RequestBody CreateAccountDetailDTO createAccountDetailDTO) {
        return ResponseEntity.ok(accountDetailServices.saveAccountDetail(createAccountDetailDTO));
    }

    @PatchMapping(value = "/updateUserDetail")
    public ResponseEntity<AccountDetail> UpdateAccountDetailDTO(
            @RequestParam String id, @RequestBody UpdateAccountDetailDTO updateAccountDetailDTO) {
        return ResponseEntity.ok(accountDetailServices.updateAccountDetail(id, updateAccountDetailDTO));
    }

    // @DeleteMapping(value = "/deleteUserDetail")
    // public void deleteAccountDetail(@RequestParam String id) {
    // accountDetailServices.deleteAccountDetail(Integer.parseInt(id));
    // }

    // softDelete
    @DeleteMapping(value = "/deleteUserDetail")
    public void deleteAccountDetail(@RequestParam String id) {
        accountDetailServices.softDeleteAcouuAccountDetail(Integer.parseInt(id));
    }
}
