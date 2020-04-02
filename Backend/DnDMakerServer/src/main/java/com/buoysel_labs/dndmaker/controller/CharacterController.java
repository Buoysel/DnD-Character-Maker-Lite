package com.buoysel_labs.dndmaker.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.buoysel_labs.dndmaker.dao.CharacterRepo;
import com.buoysel_labs.dndmaker.dao.UserRepo;
import com.buoysel_labs.dndmaker.model.DnDCharacter;

@RestController
public class CharacterController {

	@Autowired
	CharacterRepo charRepo;
	
	@Autowired
	UserRepo userRepo;
	
	@PostMapping(path="/character", consumes= {"application/json"})
	public DnDCharacter addCharacter(@RequestBody DnDCharacter dndchar) {
		dndchar.setDatecreated(new Date());
		charRepo.save(dndchar);
		return dndchar;
	}
	
}
