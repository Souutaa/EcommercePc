package com.app.ecommerce.services.implement;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.models.Product;
import com.app.ecommerce.respositories.ProductRepository;
import com.app.ecommerce.services.IProductServices;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServicesImp implements IProductServices {

  @Autowired
  private ProductRepository productRepository;

  @Override
  public Product create(CreateProductRequest request, MultipartFile thumbnail) {

    String fileBasePath = "/app/src/main/resources/thumbnails/";
    String fileName = StringUtils.cleanPath(thumbnail.getOriginalFilename());
    String fileExtension = StringUtils.getFilenameExtension(fileName);
    try {
      Files.copy(thumbnail.getInputStream(),
          (new File(fileBasePath + request.getProductLine() + "." + fileExtension)).toPath(),
          StandardCopyOption.REPLACE_EXISTING);
    } catch (IOException e) {
      e.printStackTrace();
    }

    Product newProduct = Product.builder()
      .productLine(request.getProductLine()).productName(request.getProductName()).build();

    return this.productRepository.save(newProduct);

  }

}
