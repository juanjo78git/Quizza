package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.Book;

/**
 * @author juanjo78git
 *
 */
public class BookResponse {

	private List<Book> book;

	/**
	 * @return Book
	 */
	public List<Book> getBook() {
		return book;
	}

	/**
	 * @param book Book
	 */
	public void setBook(List<Book> book) {
		this.book = book;
	}
	
}
