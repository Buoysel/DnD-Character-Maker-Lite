package com.buoysel_labs.dndmaker.model;

import java.util.Date;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="characters")
@Cacheable
@Cache(usage=CacheConcurrencyStrategy.READ_ONLY)
public class DnDCharacter {
	
	@Id
	@GeneratedValue
	@Column(name="char_id")
	private int charID;
	
	@ManyToOne(fetch=FetchType.LAZY)
	private DnDUser creator;
	
	private Date datecreated;
	
	private String name;
	private int level;
	private String race;
	@Column(name="class")
	private String charClass;
	private String background;
	private String alignment;
	
	private int hitpoints;
	private int strength;
	private int dexterity;
	private int constitution;
	private int intelligence;
	private int wisdom;
	private int charisma;
	
	
	public int getCharID() {
		return charID;
	}
	public void setCharID(int charID) {
		this.charID = charID;
	}
	public int getCreator() {
		return creator.getUserID();
	}
	public void setCreator(DnDUser creator) {
		this.creator = creator;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public String getRace() {
		return race;
	}
	public void setRace(String race) {
		this.race = race;
	}

	public String getCharClass() {
		return charClass;
	}
	public void setCharClass(String charClass) {
		this.charClass = charClass;
	}
	public String getBackground() {
		return background;
	}
	public void setBackground(String background) {
		this.background = background;
	}
	public String getAlignment() {
		return alignment;
	}
	public void setAlignment(String alignment) {
		this.alignment = alignment;
	}
	public int getHitpoints() {
		return hitpoints;
	}
	public void setHitpoints(int hitpoints) {
		this.hitpoints = hitpoints;
	}
	public int getStrength() {
		return strength;
	}
	public void setStrength(int strength) {
		this.strength = strength;
	}
	public int getDexterity() {
		return dexterity;
	}
	public void setDexterity(int dexterity) {
		this.dexterity = dexterity;
	}
	public int getConstitution() {
		return constitution;
	}
	public void setConstitution(int constitution) {
		this.constitution = constitution;
	}
	public int getIntelligence() {
		return intelligence;
	}
	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}
	public int getWisdom() {
		return wisdom;
	}
	public void setWisdom(int wisdom) {
		this.wisdom = wisdom;
	}
	public int getCharisma() {
		return charisma;
	}
	public void setCharisma(int charisma) {
		this.charisma = charisma;
	}
	@Override
	public String toString() {
		return "Character [charID=" + charID + ", creator=" + creator.getUserID() + ", datecreated=" + datecreated + ", name="
				+ name + ", level=" + level + ", charClass=" + charClass + ", background=" + background + ", alignment="
				+ alignment + ", hitpoints=" + hitpoints + ", strength=" + strength + ", dexterity=" + dexterity
				+ ", constitution=" + constitution + ", intelligence=" + intelligence + ", wisdom=" + wisdom
				+ ", charisma=" + charisma + "]";
	}
}
