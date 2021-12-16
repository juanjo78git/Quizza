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
 * BookmarkHistory Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="bookmarkhistories")
public class BookmarkHistory implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2854952992209061334L;

	/**
	 * Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	/**
	 * user (UserQuizza)
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private UserQuizza user;
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
	 * Answer
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private Answer answer;
	
	
	
	/**
	 * 
	 */
	public BookmarkHistory() {
		super();
	}

	/**
	 * @param id Id
	 * @param user UserQuizza
	 * @param book Book
	 * @param bookPage BookPage
	 * @param answer Answer
	 */
	public BookmarkHistory(Long id, UserQuizza user, Book book, BookPage bookPage, Answer answer) {
		super();
		this.id = id;
		this.user = user;
		this.book = book;
		this.bookPage = bookPage;
		this.answer = answer;
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
	 * @return User
	 */
	public UserQuizza getUser() {
		return user;
	}

	/**
	 * @param user UserQuizza
	 */
	public void setUser(UserQuizza user) {
		this.user = user;
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
	 * @return the Answer
	 */
	public Answer getAnswer() {
		return answer;
	}

	/**
	 * @param answer Answer
	 */
	public void setAnswer(Answer answer) {
		this.answer = answer;
	}
	
	
}
