package com.app.ecommerce.services.implement;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.ws.rs.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.DTO.product.UpdateProductLineRequest;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
import com.app.ecommerce.models.Product;
import com.app.ecommerce.respositories.BrandRepository;
import com.app.ecommerce.respositories.CategoryRepository;
import com.app.ecommerce.respositories.ProductRepository;
import com.app.ecommerce.respositories.WarrantyPeriodRepository;
import com.app.ecommerce.services.IProductServices;
import com.app.ecommerce.utils.Utils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServicesImp implements IProductServices {

  @Autowired
  private ProductRepository productRepository;

  @Autowired
  private BrandRepository brandRepository;

  @Autowired
  private CategoryRepository categoryRepository;

  @Autowired
  private WarrantyPeriodRepository warrantyPeriodRepository;


  @Override
  public Product create(CreateProductRequest request, MultipartFile thumbnail, MultipartFile[] productImages)
      throws IOException {

    String fileBasePath = "/app/src/main/resources/thumbnails/" + request.getProductLine() + "/";
    String fileName = StringUtils.cleanPath(thumbnail.getOriginalFilename());
    String fileExtension = StringUtils.getFilenameExtension(fileName);

    Utils.clearFolderContents(fileBasePath);
    Utils.copyFiles(thumbnail, fileBasePath + request.getProductLine() + "." + fileExtension);

    String imageBasePath = "/app/src/main/resources/images/" + request.getProductLine() + "/";
    Utils.clearFolderContents(imageBasePath);
    int index = 0;
    for (MultipartFile image : productImages) {
      String imageName = StringUtils.cleanPath(image.getOriginalFilename());
      String imageExtension = StringUtils.getFilenameExtension(imageName);
      Utils.copyFiles(image, imageBasePath + request.getProductLine() + "_" + index + "." + imageExtension);
      index++;
    }

    Product newProduct = Product.builder()
        .productLine(request.getProductLine())
        .productName(request.getProductName())
        .brand(this.brandRepository.findById(request.getBrandId()).get())
        .category(this.categoryRepository.findById(request.getCategoryId()).get())
        .warrantyPeriod(this.warrantyPeriodRepository.findById(request.getWarrantyPeriodId()).get())
        .price(request.getPrice())
        .discount(request.getDiscount())
        .build();
    return this.productRepository.save(newProduct);
  }

  @Override
  public Product getProduct(String productLine) {
    Optional<Product> productOpt = this.productRepository.findByProductLine(productLine);
    if (!productOpt.isPresent()) {
      throw new ResourceNotFoundException(productLine + "not found");
    }
    Product fetchedProduct = productOpt.get();
    return fetchedProduct;
  }


  @Override
  public List<String> getProductImages(String productLine) {
    String folderBasePath = "/app/src/main/resources/images/" + productLine + "/";
    File folder = new File(folderBasePath);
    File[] listOfFiles = folder.listFiles();
    List<String> imageUris = new ArrayList<String>();

    for (File file : listOfFiles) {
      if (file.isFile()) {
        Path path = Paths.get("images/" + productLine + "/" + file.getName());
        imageUris.add(path.toString());
      }
    }
    return imageUris;
  }

  @Override
  public String getProductThumbnail(String productLine) {
    String folderBasePath = "/app/src/main/resources/thumbnails/" + productLine + "/";
    File folder = new File(folderBasePath);
    File[] listOfFiles = folder.listFiles();

    for (File file : listOfFiles) {
      if (file.isFile()) {
        if (file.getName().startsWith(productLine)) {
          Path path = Paths.get("thumbnails/" + productLine + "/" + file.getName());
          return path.toString();
        }
      }
    }
    throw new NotFoundException("File not found");
  }

  @Override
  public Product update(UpdateProductLineRequest request, MultipartFile thumbnail, MultipartFile[] productImages)
      throws IOException {
    Product product = this.getProduct(request.getProductLine());

    if (!thumbnail.isEmpty()) {
      String fileBasePath = "/app/src/main/resources/thumbnails/" + request.getProductLine() + "/";
      String fileName = StringUtils.cleanPath(thumbnail.getOriginalFilename());
      String fileExtension = StringUtils.getFilenameExtension(fileName);
      Utils.clearFolderContents(fileBasePath);
      Utils.copyFiles(thumbnail, fileBasePath + request.getProductLine() + "." + fileExtension);
    }

    if (productImages.length > 0) {
      String imageBasePath = "/app/src/main/resources/images/" + request.getProductLine() + "/";
      Utils.clearFolderContents(imageBasePath);
      int index = 0;
      for (MultipartFile image : productImages) {
        String imageName = StringUtils.cleanPath(image.getOriginalFilename());
        String imageExtension = StringUtils.getFilenameExtension(imageName);
        Utils.copyFiles(image, imageBasePath + request.getProductLine() + "_" + index + "." + imageExtension);
        index++;
      }
    }

    product.setBrand(this.brandRepository.findById(request.getBrandId()).get());
    product.setCategory(this.categoryRepository.findById(request.getCategoryId()).get());
    product.setWarrantyPeriod(this.warrantyPeriodRepository.findById(request.getWarrantyPeriodId()).get());
    product.setProductName(request.getProductName());
    product.setPrice(request.getPrice());
    product.setDiscount(request.getDiscount());

    return this.productRepository.save(product);
  }

  @Override
  public Product softDelete(String productLine) {
    Optional<Product> product = this.productRepository.findByProductLine(productLine);
    if (!product.isPresent())
      throw new ResourceNotFoundException(productLine + "not found");
    Product fetchedProduct = product.get();
    Timestamp timestamp = new Timestamp(new Date().getTime());
    fetchedProduct.setDeletedAt(timestamp);
    return this.productRepository.save(fetchedProduct);
  }

  @Override
  public Product undoSoftDelete(String productLine) {
    Optional<Product> product = this.productRepository.findByProductLine(productLine);
    if (!product.isPresent())
      throw new ResourceNotFoundException(productLine + "not found");
    Product fetchedProduct = product.get();
    fetchedProduct.setDeletedAt(null);
    return this.productRepository.save(fetchedProduct);
  }

  

}
