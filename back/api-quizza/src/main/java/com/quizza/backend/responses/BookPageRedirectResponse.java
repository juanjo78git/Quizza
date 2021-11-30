package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.BookPageRedirect;

public class BookPageRedirectResponse {

	private List<BookPageRedirect> bookPageRedirect;

	public List<BookPageRedirect> getBookPageRedirect() {
		return bookPageRedirect;
	}

	public void setBookPageRedirect(List<BookPageRedirect> bookPageRedirect) {
		this.bookPageRedirect = bookPageRedirect;
	}
	
}
