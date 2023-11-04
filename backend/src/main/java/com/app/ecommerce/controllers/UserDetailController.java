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
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.AccountDetail;
import com.app.ecommerce.services.IAccountDetailServices;

import lombok.RequiredArgsConstructor;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/userDetail") // This means URL's start with /demo (after Application path)
@RequiredArgsConstructor
public class UserDetailController {
    @Autowired
    private IAccountDetailServices accountDetailServices;

    @GetMapping(value = "/all")
    public @ResponseBody ResponseEntity<Object> getAllAccountDetail(@RequestParam Boolean active) {
        try {
            List<AccountDetail> accountDetail = accountDetailServices.getAllAccountDetails(active);
            return new ResponseEntity<Object>(accountDetail, HttpStatus.OK);
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("Can't have any user in list");
        }
    }

    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Object> getAccountDetail(@PathVariable String id) {
        AccountDetail accountDetail = accountDetailServices.getAccountDetailById(Integer.parseInt(id));
        return new ResponseEntity<Object>(accountDetail, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<AccountDetail> CreateAccountDetailDTO(
            @RequestBody CreateAccountDetailDTO createAccountDetailDTO) {
        return ResponseEntity.ok(accountDetailServices.saveAccountDetail(createAccountDetailDTO));
    }

    @PatchMapping(value = "/{id}/update")
    public ResponseEntity<AccountDetail> UpdateAccountDetailDTO(
            @PathVariable String id, @RequestBody UpdateAccountDetailDTO updateAccountDetailDTO) {
        return ResponseEntity.ok(accountDetailServices.updateAccountDetail(id, updateAccountDetailDTO));
    }

    @PatchMapping(value = "/{id}/active")
    public ResponseEntity<AccountDetail> activeAccountDetail(@PathVariable String id) {
        return ResponseEntity.ok(accountDetailServices.activeAccountDetail(id));
    }

    // softDelete
    @DeleteMapping(value = "/delete")
    public void deleteAccountDetail(@RequestParam String id) {
        accountDetailServices.softDeleteAccountDetail(Integer.parseInt(id));
    }
}
