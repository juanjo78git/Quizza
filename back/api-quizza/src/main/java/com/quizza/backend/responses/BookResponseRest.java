package com.quizza.backend.responses;

/**
 * @author juanjo78git
 *
 */
public class BookResponseRest extends ResponseRest {

	private BookResponse bookResponse = new BookResponse();

	/**
	 * @return BookResponse
	 */
	public BookResponse getBookResponse() {
		return bookResponse;
	}

	/**
	 * @param bookResponse BookResponse
	 */
	public void setBookResponse(BookResponse bookResponse) {
		this.bookResponse = bookResponse;
	}

}
