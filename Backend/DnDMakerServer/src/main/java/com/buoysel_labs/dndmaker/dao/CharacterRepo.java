package com.buoysel_labs.dndmaker.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buoysel_labs.dndmaker.model.DnDCharacter;
import com.buoysel_labs.dndmaker.model.DnDUser;

public interface CharacterRepo extends JpaRepository<DnDCharacter, Integer>{

	DnDCharacter findByCharID(int cid);
	
	List<DnDCharacter> findAllByCreator(DnDUser creator);

}
