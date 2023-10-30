package com.app.ecommerce.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.app.ecommerce.DTO.product.CreateProductRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
  @PostMapping("/upload")
  public ResponseEntity<Object> uploadToLocalFileSystem(
      @RequestPart("file") MultipartFile file,
      @RequestPart("json") CreateProductRequest request) {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    String fileBasePath = "/app/src/main/resources/thumbnails/";
    try {
      Files.copy(file.getInputStream(), (new File(fileBasePath + fileName)).toPath(), StandardCopyOption.REPLACE_EXISTING);
    } catch (IOException e) {
      e.printStackTrace();
    }
    String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
        .path("/files/download/")
        .path(fileName)
        .toUriString();
    return ResponseEntity.ok(fileDownloadUri);
  }
}
