package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.BookmarkHistory;

public class BookmarkHistoryResponse {

	private List<BookmarkHistory> bookmarkHistory;

	public List<BookmarkHistory> getBookmarkHistory() {
		return bookmarkHistory;
	}

	public void setBookmarkHistory(List<BookmarkHistory> bookmarkHistory) {
		this.bookmarkHistory = bookmarkHistory;
	}
	
}
