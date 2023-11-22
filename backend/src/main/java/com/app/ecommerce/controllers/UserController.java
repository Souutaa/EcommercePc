package com.app.ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.account.UpdateAccountRoleRequest;
import com.app.ecommerce.DTO.account.UpdatePasswordDTO;
import com.app.ecommerce.DTO.accountDetail.AccountDetailResponse;
import com.app.ecommerce.config.JwtService;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.services.IAccountServices;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/user") // This means URL's start with /demo (after Application path)
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    @Autowired
    private IAccountServices accountServices;

    @Autowired
    private JwtService jwtService;

    @GetMapping(value = "/all")
    public @ResponseBody ResponseEntity<Object> getUsers(@RequestParam Boolean active) {
        try {
            List<Account> listUsers = accountServices.getAccounts(active);
            return new ResponseEntity<Object>(listUsers, HttpStatus.OK);
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("Can't have any user in list");
        }
    }

    @GetMapping(value = "/{username}/getUser")
    public @ResponseBody ResponseEntity<Object> getAllAccount(@RequestParam String id, @PathVariable String username) {
        try {
            Account test = accountServices.getAccountById(Integer.parseInt(id));
            return new ResponseEntity<>(test, HttpStatus.OK);
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("user not found");
        }
    }

    @GetMapping(value = "/getInfo")
    public ResponseEntity<AccountDetailResponse> getLoggedInUser(@RequestHeader("Authorization") String authorization) {
        try {
            String token = authorization.split(" ")[1].trim();
            String username = this.jwtService.extractUsername(token);
            Account fetchedAccount = accountServices.getAccountByUserName(username);
            // HACK
            return ResponseEntity
                    .ok(AccountDetailResponse.builder().accountDetail(fetchedAccount.getAccountDetails().get(0))
                            .email(fetchedAccount.getEmail()).username(username).build());
        } catch (ResourceNotFoundException ex) {
            throw new ResourceNotFoundException("user not found");
        }
    }

    @PatchMapping(value = "/{id}/updatepassword")
    public ResponseEntity<Account> updatePasswordUser(@PathVariable String id,
            @Valid @RequestBody UpdatePasswordDTO password) {
        return ResponseEntity.ok(accountServices.updatePassword(id, password));
    }

    @PatchMapping(value = "/{id}/active")
    public ResponseEntity<Account> activeUser(@PathVariable String id) {
        return ResponseEntity.ok(accountServices.activeAccount(id));
    }

    @PatchMapping(value = "/update-role")
    public ResponseEntity<Account> updateAccountRole(@Valid @RequestBody UpdateAccountRoleRequest request) {
        return ResponseEntity.ok(accountServices.updateRole(request.getUsername(), request.getRole()));
    }

    @DeleteMapping(value = "/delete")
    public void deleteUser(@RequestParam String id) {
        accountServices.softDeleteAccount(Integer.parseInt(id));
    }
}
