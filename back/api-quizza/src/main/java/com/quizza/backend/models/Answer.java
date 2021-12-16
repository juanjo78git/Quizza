package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
