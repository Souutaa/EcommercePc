package com.app.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class EcommerceApplication {

	@RequestMapping(path="/", produces="application/json")
	public String home() {
		return "Mannnnnnnn: Hello world";
	}

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}

}
