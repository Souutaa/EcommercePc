package com.app.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class EcommerceApplication {

	// @RequestMapping(path = "/", produces = "application/json")
	// public String home() {
	// return "Test: Hello world";
	// }

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}

}
