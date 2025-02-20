package com.quizza.backend.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

/**
 * Authorization server config
 * 
 * @author juanjo78git
 *
 */
@Configuration
@EnableResourceServer
public class ResourceConfig  extends ResourceServerConfigurerAdapter{

	/**
	 * APIs Secutiry
	 * @param http HttpSecurity
	 */
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/v1/bookcase").permitAll()
		.anyRequest().authenticated();
	}


}
