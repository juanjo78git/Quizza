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
 * Book Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="books")
public class Book  implements Serializable {

	private static final long serialVersionUID = -2675019510744214922L;

	/**
	 * Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	/**
	 * Title
	 */
	@Column(length = 50)
	private String title;
	/**
	 * Version
	 */
	@Column(length = 10)
	private String version;
	/**
	 * Description
	 */
	@Column(length = 500)
	private String description;
	/**
	 * Author (UserQuizza)
	 */
	@ManyToOne (fetch = FetchType.LAZY)
	@JsonIgnoreProperties( {"hibernateLazyInitializer", "handler" } )
	private UserQuizza author;
	
	/**
	 * Media type: img / video
	 */
	@Column(length = 50)
	private String mediaType;
	/**
	 * Media URL
	 */
	@Column(length = 500)
	private String mediaURL;
	/**
	 * Published
	 */
	private boolean published;
	/**
	 * Authorizations: me / public
	 */
	@Column(length = 50)
	private String authorizations;


	
	
	/**
	 * 
	 */
	public Book() {
		super();
	}

	/**
	 * @param id Id
	 * @param title Title
	 * @param version Version
	 * @param description Description
	 * @param author UserQuizza
	 * @param mediaType MediaType
	 * @param mediaURL MediaURL
	 * @param published Published
	 * @param authorizations Authorizations
	 */
	public Book(Long id, String title, String version, String description, UserQuizza author, String mediaType,
			String mediaURL, boolean published, String authorizations) {
		super();
		this.id = id;
		this.title = title;
		this.version = version;
		this.description = description;
		this.author = author;
		this.mediaType = mediaType;
		this.mediaURL = mediaURL;
		this.published = published;
		this.authorizations = authorizations;
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
	 * @return Version
	 */
	public String getVersion() {
		return version;
	}

	/**
	 * @param version Version
	 */
	public void setVersion(String version) {
		this.version = version;
	}

	/**
	 * @return Description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description Description
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return UserQuizza
	 */
	public UserQuizza getAuthor() {
		return author;
	}

	/**
	 * @param author UserQuizza
	 */
	public void setAuthor(UserQuizza author) {
		this.author = author;
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
	 * @return Published
	 */
	public boolean isPublished() {
		return published;
	}

	/**
	 * @param published Published
	 */
	public void setPublished(boolean published) {
		this.published = published;
	}

	/**
	 * @return Authorizations
	 */
	public String getAuthorizations() {
		return authorizations;
	}

	/**
	 * @param authorizations Authorizations
	 */
	public void setAuthorizations(String authorizations) {
		this.authorizations = authorizations;
	}
	
}
