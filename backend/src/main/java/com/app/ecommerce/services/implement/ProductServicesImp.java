package com.app.ecommerce.services.implement;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.ws.rs.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.exceptions.ResourceNotFoundException;
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
  public Product create(CreateProductRequest request, MultipartFile thumbnail, MultipartFile[] productImages) {

    // TODO: refactor this code
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

    String imageBasePath = "/app/src/main/resources/images/" + request.getProductLine() + "/";
    new File(imageBasePath).mkdirs();

    int index = 0;
    for (MultipartFile image : productImages) {
      String imageName = StringUtils.cleanPath(image.getOriginalFilename());
      String imageExtension = StringUtils.getFilenameExtension(imageName);

      try {
        Files.copy(image.getInputStream(),
            (new File(imageBasePath + request.getProductLine() + "_" + index + "." + imageExtension)).toPath(),
            StandardCopyOption.REPLACE_EXISTING);
        index++;
      } catch (IOException e) {
        e.printStackTrace();
      }
    }

    Product newProduct = Product.builder()
        .productLine(request.getProductLine()).productName(request.getProductName()).build();
    return this.productRepository.save(newProduct);
  }

  @Override
  public Product getProduct(String productLine) {
    Optional<Product> productOpt = this.productRepository.findByProductLine(productLine);
    if (!productOpt.isPresent()) {
      throw new ResourceNotFoundException(productLine + "not found");
    }
    return productOpt.get();
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
    // Resource resource = null;

    // try {
    // resource = new UrlResource(path.toUri());
    // } catch (MalformedURLException e) {
    // e.printStackTrace();
    // }
    return imageUris;
  }

  @Override
  public String getProductThumbnail(String productLine) {
    String folderBasePath = "/app/src/main/resources/thumbnails/";
    File folder = new File(folderBasePath);
    File[] listOfFiles = folder.listFiles();

    for (File file : listOfFiles) {
      if (file.isFile()) {
        if (file.getName().startsWith(productLine)) {
          Path path = Paths.get("thumbnails/" + file.getName());
          return path.toString();
        }
      }
    }
    throw new NotFoundException("File not found");
  }
}
