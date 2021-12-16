package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.BookmarkHistory;
import com.quizza.backend.responses.BookmarkHistoryResponseRest;

/**
 * @author juanjo78git
 *
 */
public interface IBookmarkHistoryService {

	/**
	 * @return BookmarkHistory
	 */
	public ResponseEntity<BookmarkHistoryResponseRest> listAll();
	
	/**
	 * @param bookmarkHistory BookmarkHistory
	 * @return BookmarkHistory
	 */
	public ResponseEntity<BookmarkHistoryResponseRest> create(BookmarkHistory bookmarkHistory);

	/**
	 * @param id Id
	 * @return BookmarkHistory
	 */
	public ResponseEntity<BookmarkHistoryResponseRest> findById(Long id);
	
	/**
	 * @param bookmarkHistory BookmarkHistory
	 * @param id Id
	 * @return BookmarkHistory
	 */
	public ResponseEntity<BookmarkHistoryResponseRest> update(BookmarkHistory bookmarkHistory, Long id);
	
	/**
	 * @param id Id
	 * @return BookmarkHistory
	 */
	public ResponseEntity<BookmarkHistoryResponseRest> delete(Long id);
}
