package com.quizza.backend.responses;

/**
 * @author juanjo78git
 *
 */
public class BookmarkHistoryResponseRest extends ResponseRest {
	
	private BookmarkHistoryResponse bookmarkHistoryResponse = new BookmarkHistoryResponse();

	/**
	 * @return BookmarkHistoryResponse
	 */
	public BookmarkHistoryResponse getBookmarkHistoryResponse() {
		return bookmarkHistoryResponse;
	}

	/**
	 * @param bookmarkHistoryResponse BookmarkHistoryResponse
	 */
	public void setBookmarkHistoryResponse(BookmarkHistoryResponse bookmarkHistoryResponse) {
		this.bookmarkHistoryResponse = bookmarkHistoryResponse;
	}

}
