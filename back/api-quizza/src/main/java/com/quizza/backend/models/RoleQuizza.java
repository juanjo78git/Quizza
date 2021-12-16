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
	 * Nombre
	 */
	@Column(unique = true, length = 20)
	private String nombre;

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
	 * @return Nombre
	 */
	public String getNombre() {
		return nombre;
	}


	/**
	 * @param nombre Nombre
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}
