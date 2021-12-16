package com.quizza.backend.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * RoleQuizza Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="roles")
public class RoleQuizza implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4557602960114854817L;


	/**
	 * Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	/**
	 * Name
	 */
	@Column(unique = true, length = 20)
	private String name;

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
	 * @return Name
	 */
	public String getName() {
		return name;
	}


	/**
	 * @param name Name
	 */
	public void setName(String name) {
		this.name = name;
	}

}
