package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Answer Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="answers")
public class Answer  implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4721190012136278206L;

	/**
	 * Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	/**
	 * BookPage
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private BookPage bookPage;
	/**
	 * Book
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private Book book;
	/**
	 * Answer text
	 */
	@Column(length = 500)
	private String answer;
	/**
	 * BookPage to go 
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private BookPage goPage;
	/**
	 * Stats: Indicates how many times it has been selected
	 */	
	private Long stats;
	
	
	
	/**
	 * 
	 */
	public Answer() {
		super();
	}

	/**
	 * @param id Id
	 * @param bookPage BookPage
	 * @param book Book
	 * @param answer Answer
	 * @param goPage BookPage to go
	 * @param stats Stats
	 */
	public Answer(Long id, BookPage bookPage, Book book, String answer, BookPage goPage, Long stats) {
		super();
		this.id = id;
		this.bookPage = bookPage;
		this.book = book;
		this.answer = answer;
		this.goPage = goPage;
		this.stats = stats;
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
	 * @return Answer text
	 */
	public String getAnswer() {
		return answer;
	}

	/**
	 * @param answer Answer text
	 */
	public void setAnswer(String answer) {
		this.answer = answer;
	}

	/**
	 * @return the goPage
	 */
	public BookPage getGoPage() {
		return goPage;
	}

	/**
	 * @param goPage the goPage to set
	 */
	public void setGoPage(BookPage goPage) {
		this.goPage = goPage;
	}

	/**
	 * @return Stats
	 */
	public Long getStats() {
		return stats;
	}

	/**
	 * @param stats Stats
	 */
	public void setStats(Long stats) {
		this.stats = stats;
	}
	
	
}
