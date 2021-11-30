package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.BookPage;
import com.quizza.backend.responses.BookPageResponseRest;

public interface IBookPageService {

	public ResponseEntity<BookPageResponseRest> listAll();
	
	public ResponseEntity<BookPageResponseRest> create(BookPage bookPage);

	public ResponseEntity<BookPageResponseRest> findById(Long id);
	
	public ResponseEntity<BookPageResponseRest> update(BookPage bookPage, Long id);
	
	public ResponseEntity<BookPageResponseRest> delete(Long id);
}
