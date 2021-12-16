package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.BookmarkHistory;

/**
 * @author juanjo78git
 *
 */
public class BookmarkHistoryResponse {

	private List<BookmarkHistory> bookmarkHistory;

	/**
	 * @return BookmarkHistory
	 */
	public List<BookmarkHistory> getBookmarkHistory() {
		return bookmarkHistory;
	}

	/**
	 * @param bookmarkHistory BookmarkHistory
	 */
	public void setBookmarkHistory(List<BookmarkHistory> bookmarkHistory) {
		this.bookmarkHistory = bookmarkHistory;
	}
	
}
