package com.app.ecommerce.services.implement;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.DTO.accountDetail.CreateAccountDetailDTO;
import com.app.ecommerce.DTO.accountDetail.UpdateAccountDetailDTO;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Account;
import com.app.ecommerce.models.AccountDetail;
import com.app.ecommerce.respositories.AccountDetailRepository;
import com.app.ecommerce.respositories.AccountRepository;
import com.app.ecommerce.services.IAccountDetailServices;

import lombok.var;

@Service
public class AccountDetailServicesImp implements IAccountDetailServices {

    @Autowired
    private AccountDetailRepository repo;

    @Autowired
    private AccountRepository accountRepo;

    @Override
    public List<AccountDetail> getAllAccountDetails() {
        return repo.findAll();
    }

    public List<AccountDetail> getAccountDetailActive() {
        return repo.findAllAccountDetailActive();
    }

    public List<AccountDetail> getAccountDetailNotActive() {
        return repo.findAllAccountDetailNotActive();
    }

    @Override
    public AccountDetail getAccountDetailById(int accountId) {
        Optional<AccountDetail> opt = repo.findByAccountId(accountId);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("Accpimtszjio with Id : " + accountId + " Not Found");
        }
    }

    @Override
    public AccountDetail saveAccountDetail(CreateAccountDetailDTO request) {
        List<AccountDetail> accountDetailsList = new ArrayList<AccountDetail>();
        Optional<Account> accountFound = accountRepo.findById(Integer.parseInt(request.getAccount_id()));
        if (accountFound.isPresent()) {
            var accountDetail = AccountDetail.builder().city(request.getCity())
                    .detailedAddress(request.getDetailedAddress()).district(request.getDistrict())
                    .firstName(request.getFirstName()).lastName(request.getLastName())
                    .phoneNumber(request.getPhoneNumber())
                    .account(accountFound.get())
                    .build();
            accountDetailsList.add(accountDetail);
            return repo.save(accountDetail);
        } else {
            throw new ResourceNotFoundException("Invoice with Id : " + accountFound + " Not Found");
        }
    }

    @Override
    public AccountDetail updateAccountDetail(String id, UpdateAccountDetailDTO request) {
        Optional<AccountDetail> accountFound = repo.findById(Integer.parseInt(id));
        if (accountFound.isPresent()) {
            var accountDetail = accountFound.get();
            // city
            accountDetail.setCity(request.getCity().isEmpty() ? accountDetail.getCity() : request.getCity());
            // DetailAddress
            accountDetail.setDetailedAddress(
                    request.getDetailedAddress().isEmpty() ? accountDetail.getDetailedAddress() : request.getCity());
            // District
            accountDetail
                    .setDistrict(request.getDistrict().isEmpty() ? accountDetail.getDistrict() : request.getDistrict());
            // FirstName
            accountDetail.setFirstName(
                    request.getFirstName().isEmpty() ? accountDetail.getFirstName() : request.getFirstName());
            // LastName
            accountDetail
                    .setLastName(request.getLastName().isEmpty() ? accountDetail.getLastName() : request.getLastName());
            // PhoneNumber
            accountDetail
                    .setPhoneNumber(request.getPhoneNumber().isEmpty() ? accountDetail.getPhoneNumber()
                            : request.getPhoneNumber());
            // isDefault
            // accountDetail.setDefault(request.get() ? accountDetail.getDefault() :
            // request.getDefault());
            return repo.save(accountDetail);
        } else {
            throw new ResourceNotFoundException("Invoice with Id : " + accountFound + " Not Found");
        }
    }

    @Override
    public void deleteAccountDetail(int id) {
        Optional<AccountDetail> accountFound = repo.findById(id);
        if (accountFound.isPresent()) {
            var accountDetail = accountFound.get();
            repo.delete(accountDetail);
        } else {
            throw new ResourceNotFoundException("Not exits accountDetail with Id : " + accountFound + " Not Found");
        }

    }

    @Override
    public void softDeleteAcouuAccountDetail(int id) {
        Optional<AccountDetail> accountFound = repo.findById(id);
        if (accountFound.isPresent()) {
            // Create date
            Date date = new Date();
            Timestamp timestamp = new Timestamp(date.getTime());

            // Get value accoutFound
            var accountDetail = accountFound.get();
            accountDetail.setDeletedAt(timestamp);
            repo.save(accountDetail);
        } else {
            throw new ResourceNotFoundException("Not exits accountDetail with Id  : " + accountFound + " Not Found");
        }
    }

}
