package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
