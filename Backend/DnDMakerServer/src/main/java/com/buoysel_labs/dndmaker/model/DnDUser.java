package com.buoysel_labs.dndmaker.model;

import java.util.List;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="users")
@Cacheable
@Cache(usage=CacheConcurrencyStrategy.READ_ONLY)
public class DnDUser {

	@Id
	@GeneratedValue
	@Column(name="user_id")
	private int userID;
	
	@Column(unique=true)
	private String username;
	
	private String email;
	private String password;
	
	@OneToMany(mappedBy="creator", fetch=FetchType.LAZY)
	private List<DnDCharacter> characters;
	
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<DnDCharacter> getCharacters() {
		return characters;
	}
	public void setCharacters(List<DnDCharacter> character) {
		this.characters = character;
	}
	@Override
	public String toString() {
		return "User [userID=" + userID + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", characters=" + characters + "]";
	}
	
	
	

}
