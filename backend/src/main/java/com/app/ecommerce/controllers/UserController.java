package com.app.ecommerce.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecommerce.DTO.account.UpdateUserDTO;
import com.app.ecommerce.exceptions.UnauthorizedException;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.services.IAccountServices;
import com.app.ecommerce.utils.Utils;

import com.app.ecommerce.DTO.account.CreateAccountDTO;

@RestController // This means that this class is a Controller
@RequestMapping(value = "/demo") // This means URL's start with /demo (after Application path)
public class UserController {
    // @Autowired // This means to get the bean called accountRepository
    // // Which is auto-generated by Spring, we will use it to handle the data
    // private AccountRepo accountRepository;
    @Autowired
    private IAccountServices accountServices;

    @PostMapping(value = "/add", consumes = { "Application/json" }) // Map ONLY POST Requests
    public @ResponseBody Account addNewAccount(@RequestBody CreateAccountDTO dataInput) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        String hashed = Utils.hashData(dataInput.getPassword());
        Account n = new Account();
        n.setUsername(dataInput.getUsername());
        n.setPassword(hashed);
        return accountServices.saveAccount(n);
    }

    @GetMapping(value = "/getUser")
    public @ResponseBody ResponseEntity<Object> getAllAccount(@RequestParam String id) {
        // This returns a JSON or XML with the users
        Account test = accountServices.getAccountById(Integer.parseInt(id));
        return new ResponseEntity<>(test, HttpStatus.OK);
    }

    @PostMapping(value = "/login", consumes = { "Application/json" })
    public @ResponseBody ResponseEntity<Object> login(@RequestBody CreateAccountDTO dataInput) {
        // This returns a JSON or XML with the users
        Account account = accountServices.getAccountByUserName(dataInput.getUsername());
        if (Utils.compareHashedData(dataInput.getPassword(), account.getPassword()))
            return new ResponseEntity<>(account, HttpStatus.OK);
        else
            throw new UnauthorizedException("Invalid username or password");
    }

    @PostMapping(value = "/{username}/update", consumes = { "Application/json" })
    public @ResponseBody ResponseEntity<Object> updateUser(@PathVariable("username") String username,
            @RequestBody UpdateUserDTO updateUserDTO) {
        Account account = accountServices.getAccountByUserName(updateUserDTO.getUsername());

        if (Utils.compareHashedData(updateUserDTO.getPassword(), account.getPassword())) {
            throw new UnauthorizedException("Wrong password");
        }

        account.setPassword(Utils.hashData(updateUserDTO.getPassword()));
        return new ResponseEntity<>(accountServices.saveAccount(account), HttpStatus.OK);
    }
}
