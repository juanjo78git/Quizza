package com.quizza.backend.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * UserQuizza Model
 * @author juanjo78git
 *
 */
@Entity
@Table(name="users")
public class UserQuizza implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1682661664973003665L;

	

	/**
	 * Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	/**
	 * Username
	 */
	@Column(unique = true, length = 20)
	private String username;

	/**
	 * Password
	 */
	@Column(length = 65)
	private String password;

	/**
	 * User enabled
	 */
	private Boolean enabled;


	/**
	 * Roles
	 */
	@ManyToMany (fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name="users_roles", 
	joinColumns = @JoinColumn(name = "user_id"),
	inverseJoinColumns = @JoinColumn(name = "role_id"),
	uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "role_id"})})
	private List<RoleQuizza> roles;
	
	
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
	 * @return Username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username Username
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return Password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password Password
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return Enabled
	 */
	public Boolean getEnabled() {
		return enabled;
	}

	/**
	 * @param enabled Enabled
	 */
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	/**
	 * @return Roles
	 */
	public List<RoleQuizza> getRoles() {
		return roles;
	}

	/**
	 * @param roles Roles
	 */
	public void setRoles(List<RoleQuizza> roles) {
		this.roles = roles;
	}

	
	
}
