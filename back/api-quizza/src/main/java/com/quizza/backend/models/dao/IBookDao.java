package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.Book;

/**
 * @author juanjo78git
 *
 */
public interface IBookDao extends CrudRepository<Book, Long>{

}
