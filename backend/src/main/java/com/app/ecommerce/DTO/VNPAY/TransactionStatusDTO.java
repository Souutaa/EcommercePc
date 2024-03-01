package com.app.ecommerce.DTO.VNPAY;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionStatusDTO implements Serializable {
    private String status;
    private String message;
    private String data;
}
