package com.app.ecommerce.services.implement;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;

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

@Service
public class AccountDetailServicesImp implements IAccountDetailServices {

    @Autowired
    private AccountDetailRepository repo;

    @Autowired
    private AccountRepository accountRepo;

    @Override
    public List<AccountDetail> getAllAccountDetails(boolean active) {
        if (active == true) {
            return repo.findAllAccountDetailActive();
        }
        return repo.findAll();
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
    public AccountDetail saveAccountDetail(CreateAccountDetailDTO request, String username) {
        Optional<Account> accountOpt = accountRepo.findByUsername(username);
        if (accountOpt.isPresent()) {
            var accountDetail = AccountDetail.builder().city(request.getCity())
                    .detailedAddress(request.getDetailedAddress()).district(request.getDistrict())
                    .firstName(request.getFirstName()).lastName(request.getLastName())
                    .phoneNumber(request.getPhoneNumber())
                    .email(request.getEmail())
                    .account(accountOpt.get())
                    .isDefault(accountOpt.get().getAccountDetails().size() > 0 ? false : true)
                    .build();
            return repo.save(accountDetail);
        } else {
            throw new ResourceNotFoundException("Account with username : " + accountOpt + " Not Found");
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

    public AccountDetail activeAccountDetail(String id) {
        Optional<AccountDetail> accountFound = repo.findById(Integer.parseInt(id));
        if (accountFound.isPresent()) {
            var accountDetail = accountFound.get();
            accountDetail.setDeletedAt(null);
            return repo.save(accountDetail);
        } else {
            throw new ResourceNotFoundException("Invoice with Id : " + accountFound + " Not Found");
        }
    }

    @Override
    public void softDeleteAccountDetail(int id) {
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

    @Override
    public AccountDetail activeAccountDetailDefault(int id, String username) {
        Optional<AccountDetail> accountFound = repo.findById(id);
        if (accountFound.isPresent()) {
            var accountDetail = accountFound.get();
            this.repo.removAccountDetailsDefault(this.accountRepo.findByUsername(username).get().getId());
            accountDetail.setDefault(true);
            return repo.save(accountDetail);
        } else {
            throw new ResourceNotFoundException("Invoice with Id : " + accountFound + " Not Found");
        }
    }

    @Override
    public AccountDetail getAccountDetailDefault(String username) {
        Optional<AccountDetail> opt = repo.findAccountDetailDefault(username);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("acountDetail with Id : " + username + " Not Found");
        }
    }

    @Override
    public List<AccountDetail> getAllAccountDetail(String username) {
        Optional<List<AccountDetail>> opt = this.repo.findAllAccountDetail(username);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            throw new ResourceNotFoundException("acountDetail with Id : " + username + " Not Found");
        }
    }
}
