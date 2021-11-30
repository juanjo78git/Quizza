package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.Book;

public class BookResponse {

	private List<Book> book;

	public List<Book> getBook() {
		return book;
	}

	public void setBook(List<Book> book) {
		this.book = book;
	}
	
}
