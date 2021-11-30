package com.quizza.backend.responses;

public class BookmarkHistoryResponseRest extends ResponseRest {
	
	private BookmarkHistoryResponse bookmarkHistoryResponse = new BookmarkHistoryResponse();

	public BookmarkHistoryResponse getBookmarkHistoryResponse() {
		return bookmarkHistoryResponse;
	}

	public void setBookmarkHistoryResponse(BookmarkHistoryResponse bookmarkHistoryResponse) {
		this.bookmarkHistoryResponse = bookmarkHistoryResponse;
	}

}
