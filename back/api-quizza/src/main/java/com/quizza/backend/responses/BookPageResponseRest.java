package com.quizza.backend.responses;

/**
 * @author juanjo78git
 *
 */
public class BookPageResponseRest extends ResponseRest {

	private BookPageResponse bookPageResponse = new BookPageResponse();

	/**
	 * @return BookPageResponse
	 */
	public BookPageResponse getBookPageResponse() {
		return bookPageResponse;
	}

	/**
	 * @param bookPageResponse BookPageResponse
	 */
	public void setBookPageResponse(BookPageResponse bookPageResponse) {
		this.bookPageResponse = bookPageResponse;
	}

}
