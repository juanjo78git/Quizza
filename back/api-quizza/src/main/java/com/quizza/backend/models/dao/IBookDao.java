package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.Book;

public interface IBookDao extends CrudRepository<Book, Long>{

}
