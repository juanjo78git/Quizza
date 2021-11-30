package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.BookmarkHistory;
import com.quizza.backend.responses.BookmarkHistoryResponseRest;

public interface IBookmarkHistoryService {

	public ResponseEntity<BookmarkHistoryResponseRest> listAll();
	
	public ResponseEntity<BookmarkHistoryResponseRest> create(BookmarkHistory bookmarkHistory);

	public ResponseEntity<BookmarkHistoryResponseRest> findById(Long id);
	
	public ResponseEntity<BookmarkHistoryResponseRest> update(BookmarkHistory bookmarkHistory, Long id);
	
	public ResponseEntity<BookmarkHistoryResponseRest> delete(Long id);
}
