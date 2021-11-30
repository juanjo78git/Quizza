package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.BookPageRedirect;
import com.quizza.backend.responses.BookPageRedirectResponseRest;

public interface IBookPageRedirectService {

	public ResponseEntity<BookPageRedirectResponseRest> listAll();
	
	public ResponseEntity<BookPageRedirectResponseRest> create(BookPageRedirect bookPageRedirect);

	public ResponseEntity<BookPageRedirectResponseRest> findById(Long id);
	
	public ResponseEntity<BookPageRedirectResponseRest> update(BookPageRedirect bookPageRedirect, Long id);
	
	public ResponseEntity<BookPageRedirectResponseRest> delete(Long id);
}
