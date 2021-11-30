package com.quizza.backend.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.quizza.backend.models.BookPage;

public interface IBookPageDao extends CrudRepository<BookPage, Long>{

}
