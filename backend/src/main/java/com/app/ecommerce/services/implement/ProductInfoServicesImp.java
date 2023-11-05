package com.app.ecommerce.services.implement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Product;
import com.app.ecommerce.models.ProductInfo;
import com.app.ecommerce.respositories.ProductInfoRepository;
import com.app.ecommerce.respositories.ProductRepository;
import com.app.ecommerce.services.IProductInfoServices;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
  public class ProductInfoServicesImp implements IProductInfoServices {
  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private ProductInfoRepository productInfoRepository;

  // BUG: Meaningless return, change required
  @Override
  public Product addProductInfos(String productLine, String[] productInfos) {
    Optional<Product> product = this.productRepository.findByProductLine(productLine);
    if (!product.isPresent())
      throw new ResourceNotFoundException(productLine + "not found");
    Product fetchedProduct = product.get();
    for (String info : productInfos) {
      ProductInfo newInfo = ProductInfo.builder().product(fetchedProduct).productInformation(info).build();
      this.productInfoRepository.save(newInfo);
    }
    return fetchedProduct;
  }

  @Override
  public List<String> getProductInfos(Integer productId) {
    return this.productInfoRepository.getProductInformation(productId);
  }

  @Override
  public List<ProductInfo> getProductInfosAllAttributes(Integer productId) {
    return this.productInfoRepository.getProductInformationAllAttributes(productId);
  }

  @Override
  public List<ProductInfo> deleteProductInfos(List<Integer> infoIds) {
    this.productInfoRepository.deleteAllById(infoIds);;
    return null;
  }

  @Override
  public ProductInfo updateProductInfo(Integer infoId, String newInformation) {
    Optional<ProductInfo> productInfo = this.productInfoRepository.findById(infoId);
    if (!productInfo.isPresent())
      throw new ResourceNotFoundException(infoId + " not found");
    ProductInfo fetchedProductInfo = productInfo.get();
    fetchedProductInfo.setProductInformation(newInformation);
    return this.productInfoRepository.save(fetchedProductInfo);
  }
}
