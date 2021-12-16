package com.quizza.backend.responses;

/**
 * @author juanjo78git
 *
 */
public class BookPageRedirectResponseRest extends ResponseRest {

	private BookPageRedirectResponse bookPageRedirectResponse = new BookPageRedirectResponse();

	/**
	 * @return BookPageRedirectResponse
	 */
	public BookPageRedirectResponse getBookPageRedirectResponse() {
		return bookPageRedirectResponse;
	}

	/**
	 * @param bookPageRedirectResponse BookPageRedirectResponse
	 */
	public void setBookPageRedirectResponse(BookPageRedirectResponse bookPageRedirectResponse) {
		this.bookPageRedirectResponse = bookPageRedirectResponse;
	}

}
