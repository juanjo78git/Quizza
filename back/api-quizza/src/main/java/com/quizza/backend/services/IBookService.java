package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.Book;
import com.quizza.backend.responses.BookResponseRest;

public interface IBookService {
	public ResponseEntity<BookResponseRest> listAll();
	
	public ResponseEntity<BookResponseRest> create(Book book);

	public ResponseEntity<BookResponseRest> findById(Long id);
	
	public ResponseEntity<BookResponseRest> update(Book book, Long id);
	
	public ResponseEntity<BookResponseRest> delete(Long id);
}
