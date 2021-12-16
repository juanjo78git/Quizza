package com.quizza.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * 
 * @author juanjo78git
 *
 */
@SpringBootApplication
public class ApiQuizzaApplication implements CommandLineRunner{


	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	/**
	 * Run app
	 * @param args None
	 */
	public static void main(String[] args) {
		SpringApplication.run(ApiQuizzaApplication.class, args);
	}

	/**
	 * Show 3 valid user password
	 * @param args None
	 */
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Run...");
		
		String password = "pwdquizza";
		
		System.out.println("Valid Passwords (" + password + "):");
		for (int i = 0; i < 3; i++) {
			String passwordBcrypt = passwordEncoder.encode(password);
			System.out.println(passwordBcrypt);
		}
	}

}
