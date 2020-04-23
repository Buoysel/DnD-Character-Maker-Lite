package com.buoysel_labs.dndmaker.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.buoysel_labs.dndmaker.dao.CharacterRepo;
import com.buoysel_labs.dndmaker.dao.UserRepo;
import com.buoysel_labs.dndmaker.model.DnDCharacter;
import com.buoysel_labs.dndmaker.model.DnDUser;

@RestController
public class CharacterController {

	@Autowired
	CharacterRepo charRepo;
	
	@Autowired
	UserRepo userRepo;
	
	@GetMapping(path="/character/{cid}")
	public ResponseEntity<DnDCharacter> getDnDChar(@PathVariable("cid") int cid) {
		
		DnDCharacter foundChar = charRepo.findByCharID(cid);
		System.out.println(foundChar);
		
		if (foundChar != null) {
			return new ResponseEntity<>(foundChar, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping(path="/character", consumes= {"application/json"})
	public DnDCharacter addCharacter(@RequestBody DnDCharacter dndchar) {
		
		DnDUser creator = userRepo.findByUserID(dndchar.getCreator());
		
		if (creator == null) {
			return null;
		}
		
		dndchar.setCreator(creator);
		dndchar.setDatecreated(new Date());
		charRepo.save(dndchar);
		
		return dndchar;
	}
	
	@PutMapping(path="/character/{cid}")
	public DnDCharacter updateChar(@RequestBody DnDCharacter dndchar) {
		return charRepo.save(dndchar);
	}
	
	
	@DeleteMapping(path="/character/{cid}") 
	public String deleteChar(@PathVariable("cid") int cid) {
		DnDCharacter deletedChar = charRepo.getOne(cid);
		String charName = deletedChar.getName();
		charRepo.delete(deletedChar);
		return charName + " has been deleted.";
	}
	
}
