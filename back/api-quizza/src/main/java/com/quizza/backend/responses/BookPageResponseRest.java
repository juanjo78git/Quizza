package com.quizza.backend.responses;

public class BookPageResponseRest extends ResponseRest {

	private BookPageResponse bookPageResponse = new BookPageResponse();

	public BookPageResponse getBookPageResponse() {
		return bookPageResponse;
	}

	public void setBookPageResponse(BookPageResponse bookPageResponse) {
		this.bookPageResponse = bookPageResponse;
	}

}
