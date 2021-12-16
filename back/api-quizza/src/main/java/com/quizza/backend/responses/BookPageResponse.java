package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.BookPage;

/**
 * @author juanjo78git
 *
 */
public class BookPageResponse {

	private List<BookPage> bookPage;

	/**
	 * @return BookPage
	 */
	public List<BookPage> getBookPage() {
		return bookPage;
	}

	/**
	 * @param bookPage BookPage
	 */
	public void setBookPage(List<BookPage> bookPage) {
		this.bookPage = bookPage;
	}
	
}
