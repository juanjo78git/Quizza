package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.UserQuizza;

public interface IUserDao  extends CrudRepository<UserQuizza, Long>{

	public UserQuizza findByUsername(String username);
}
