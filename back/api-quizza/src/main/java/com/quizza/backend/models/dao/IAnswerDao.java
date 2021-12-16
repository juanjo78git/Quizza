package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.Answer;

/**
 * @author juanjo78git
 *
 */
public interface IAnswerDao extends CrudRepository<Answer, Long>{

}
