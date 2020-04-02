package com.buoysel_labs.dndmaker.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buoysel_labs.dndmaker.model.DnDCharacter;

public interface CharacterRepo extends JpaRepository<DnDCharacter, Integer>{

}
