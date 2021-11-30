package com.quizza.backend.responses;

public class BookResponseRest extends ResponseRest {

	private BookResponse bookResponse = new BookResponse();

	public BookResponse getBookResponse() {
		return bookResponse;
	}

	public void setBookResponse(BookResponse bookResponse) {
		this.bookResponse = bookResponse;
	}

}
