package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.UserQuizza;

/**
 * @author juanjo78git
 *
 */
public interface IUserDao  extends CrudRepository<UserQuizza, Long>{

	/**
	 * @param username Username
	 * @return UserQuizza
	 */
	public UserQuizza findByUsername(String username);
}
