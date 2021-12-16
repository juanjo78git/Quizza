package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	
	
}
