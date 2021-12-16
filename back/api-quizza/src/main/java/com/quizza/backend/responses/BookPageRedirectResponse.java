package com.quizza.backend.responses;

import java.util.List;

import com.quizza.backend.models.BookPageRedirect;

/**
 * @author juanjo78git
 *
 */
public class BookPageRedirectResponse {

	private List<BookPageRedirect> bookPageRedirect;

	/**
	 * @return BookPageRedirect
	 */
	public List<BookPageRedirect> getBookPageRedirect() {
		return bookPageRedirect;
	}

	/**
	 * @param bookPageRedirect BookPageRedirect
	 */
	public void setBookPageRedirect(List<BookPageRedirect> bookPageRedirect) {
		this.bookPageRedirect = bookPageRedirect;
	}
	
}
