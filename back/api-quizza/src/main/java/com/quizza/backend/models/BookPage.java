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
 * BookPage Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="bookpages")
public class BookPage  implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6511182330398696903L;

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
	 * Title
	 */
	private String title;
	/**
	 * Type
	 */
	@Column(length = 50)
	private String type;
	/**
	 * Media type
	 */
	@Column(length = 50)
	private String mediaType;
	/**
	 * Media URL
	 */
	@Column(length = 500)
	private String mediaURL;
	/**
	 * Text
	 */
	private String text;
	/**
	 * Question
	 */
	private String question;

	
	/**
	 * 
	 */
	public BookPage() {
		super();
	}

	/**
	 * @param id Id
	 * @param book Book
	 * @param title Title
	 * @param type Type
	 * @param mediaType MediaType
	 * @param mediaURL MediaURL
	 * @param text Text
	 * @param question Question
	 */
	public BookPage(Long id, Book book, String title, String type, String mediaType, String mediaURL, String text,
			String question) {
		super();
		this.id = id;
		this.book = book;
		this.title = title;
		this.type = type;
		this.mediaType = mediaType;
		this.mediaURL = mediaURL;
		this.text = text;
		this.question = question;
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
	 * @return Title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title Title
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return Type: start / choice / end 
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type Type
	 */
	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return MediaType
	 */
	public String getMediaType() {
		return mediaType;
	}

	/**
	 * @param mediaType MediaType
	 */
	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}

	/**
	 * @return MediaURL
	 */
	public String getMediaURL() {
		return mediaURL;
	}

	/**
	 * @param mediaURL MediaURL
	 */
	public void setMediaURL(String mediaURL) {
		this.mediaURL = mediaURL;
	}

	/**
	 * @return Text
	 */
	public String getText() {
		return text;
	}

	/**
	 * @param text Text
	 */
	public void setText(String text) {
		this.text = text;
	}

	/**
	 * @return Question
	 */
	public String getQuestion() {
		return question;
	}

	/**
	 * @param question Question
	 */
	public void setQuestion(String question) {
		this.question = question;
	}
	
	
}
