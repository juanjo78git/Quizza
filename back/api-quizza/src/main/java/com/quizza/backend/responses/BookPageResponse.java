package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.BookPage;

public class BookPageResponse {

	private List<BookPage> bookPage;

	public List<BookPage> getBookPage() {
		return bookPage;
	}

	public void setBookPage(List<BookPage> bookPage) {
		this.bookPage = bookPage;
	}
	
}
