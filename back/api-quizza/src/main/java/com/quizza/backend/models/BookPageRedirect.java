package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * BookPageRedirect Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="bookpageredirects")
public class BookPageRedirect implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8428960922289055316L;

	/**
	 * Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	/**
	 * Book
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private Book book;
	/**
	 * BookPage
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private BookPage bookPage;
	/**
	 * BookPage visited
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private BookPage bookPageVisited;
	/**
	 * Answer visited
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private Answer answerVisited;
	/**
	 * BookPage to go 
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private BookPage goPage;
	

	/**
	 * 
	 */
	public BookPageRedirect() {
		super();
	}

	/**
	 * @param id Id
	 * @param book Book
	 * @param bookPage BookPage
	 * @param bookPageVisited BookPage Visited
	 * @param answerVisited Answer Visited
	 * @param goPage BookPage to go
	 */
	public BookPageRedirect(Long id, Book book, BookPage bookPage, BookPage bookPageVisited, Answer answerVisited,
			BookPage goPage) {
		super();
		this.id = id;
		this.book = book;
		this.bookPage = bookPage;
		this.bookPageVisited = bookPageVisited;
		this.answerVisited = answerVisited;
		this.goPage = goPage;
	}

	/**
	 * @return Id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id Id
	 */
	public void setId(Long id) {
		this.id = id;
	}
	
	/**
	 * @return Book
	 */
	public Book getBook() {
		return book;
	}

	/**
	 * @param book Book
	 */
	public void setBook(Book book) {
		this.book = book;
	}

	/**
	 * @return BookPage
	 */
	public BookPage getBookPage() {
		return bookPage;
	}

	/**
	 * @param bookPage BookPage
	 */
	public void setBookPage(BookPage bookPage) {
		this.bookPage = bookPage;
	}

	/**
	 * @return BookPage visited
	 */
	public BookPage getBookPageVisited() {
		return bookPageVisited;
	}

	/**
	 * @param bookPageVisited BookPage visited
	 */
	public void setBookPageVisited(BookPage bookPageVisited) {
		this.bookPageVisited = bookPageVisited;
	}

	/**
	 * @return Answer visited
	 */
	public Answer getAnswerVisited() {
		return answerVisited;
	}

	/**
	 * @param answerVisited Answer visited
	 */
	public void setAnswerVisited(Answer answerVisited) {
		this.answerVisited = answerVisited;
	}

	/**
	 * @return BookPage to go
	 */
	public BookPage getGoPage() {
		return goPage;
	}

	/**
	 * @param goPage BookPage to go
	 */
	public void setGoPage(BookPage goPage) {
		this.goPage = goPage;
	}

}
