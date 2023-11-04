package com.app.ecommerce.services;

import java.util.List;

import com.app.ecommerce.models.Product;
import com.app.ecommerce.models.ProductInfo;

public interface IProductInfoServices {
  public Product addProductInfos(String productLine, String[] productInfos);
  public List<String> getProductInfos(Integer productId);  
  public List<ProductInfo> getProductInfosAllAttributes(Integer productId);
  public List<ProductInfo> deleteProductInfos(List<Integer> infoIds);
  public ProductInfo updateProductInfo(Integer infoId, String newInformation);
}
