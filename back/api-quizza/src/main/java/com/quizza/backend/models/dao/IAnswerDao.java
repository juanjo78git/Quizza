package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.Answer;

public interface IAnswerDao extends CrudRepository<Answer, Long>{

}
