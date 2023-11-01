package com.app.ecommerce.controllers;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.ecommerce.DTO.product.CreateProductRequest;
import com.app.ecommerce.DTO.product.GetProductReponse;
import com.app.ecommerce.DTO.product.UpdateProductLineRequest;
import com.app.ecommerce.models.Product;
import com.app.ecommerce.services.IProductServices;

import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

  @Autowired
  private IProductServices productServices;

  @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Product> createProductLine(
      @RequestPart(name = "thumbnail", required = true) MultipartFile thumbnail,
      @RequestPart(name = "images", required = true) MultipartFile[] images,
      @RequestPart("json") @Valid CreateProductRequest request) {
    return ResponseEntity.ok(this.productServices.create(request, thumbnail, images));
  }

  @PostMapping(value = "/{productLine}/update", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<Product> updateProductLine(
    @RequestPart(name = "thumbnail", required = false) MultipartFile thumbnail,
    @RequestPart(name = "images", required = false) MultipartFile[] images,
    @RequestPart("data") @Valid UpdateProductLineRequest request
  ) {
    return null;
  }

  @GetMapping(value = "/{productLine}")
  public ResponseEntity<GetProductReponse> getProduct(@PathVariable ("productLine") String productLine) {
    Product product = this.productServices.getProduct(productLine);
    List<String> productImages = this.productServices.getProductImages(productLine);
    String productThumbnail = this.productServices.getProductThumbnail(productLine);

    return ResponseEntity.ok(GetProductReponse.builder()
      .productLine(product.getProductLine())
      .productName(product.getProductName())
      .thumbnailUri(productThumbnail)
      .imageUris(productImages)
      .build());
  }

  @GetMapping(value = "/get-file", produces = { MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE })
  public ResponseEntity<Resource> getFile(@QueryParam("filePath") String filePath) throws IOException {
    String fileBasePath = "/app/src/main/resources/";

    Path path = Paths.get(fileBasePath + filePath);
    Resource resource = null;

    try {
      resource = new UrlResource(path.toUri());
    } catch (MalformedURLException e) {
      e.printStackTrace();
    }

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
        .body(resource);
  }

  // @GetMapping(value = "/{productLine}/get-file", produces = {
  // MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE })
  // public ResponseEntity<Resource> getMultipleFiles(@PathParam("productLine")
  // String productLine) throws IOException {
  // String folderBasePath = "/app/src/main/resources/images/" + productLine +
  // "/";
  // File folder = new File(folderBasePath);
  // File[] listOfFiles = folder.listFiles();

  // for (File file : listOfFiles) {
  // if (file.isFile()) {
  // System.out.println(file.getName());
  // }
  // }
  // // Path path = Paths.get(fileBasePath + "testProduct1.png");
  // Resource resource = null;

  // try {
  // resource = new UrlResource(path.toUri());
  // } catch (MalformedURLException e) {
  // e.printStackTrace();
  // }

  // return ResponseEntity.ok()
  // .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" +
  // resource.getFilename() + "\"")
  // .body(resource);
  // }
}
