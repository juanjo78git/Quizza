package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
