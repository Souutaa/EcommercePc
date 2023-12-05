package com.app.ecommerce.DTO.order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TopEmployeeDTO {
  private Integer employeeId;
  private String employeeName;
  private Integer totalConfirmedOrder;
  private Integer subTotalOrder;


}
