package com.buoysel_labs.dndmaker.controller;

import java.util.Date;
import java.util.List;

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
	
	@GetMapping(path="/character/all/{uid}")
	public ResponseEntity<List<DnDCharacter>> getAllCharacters(@PathVariable("uid") int uid) {
		
		try {
			DnDUser tempCreator = new DnDUser();
			tempCreator.setUserID(uid);
			return new ResponseEntity<>(charRepo.findAllByCreator(tempCreator), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}
	
	
	@PostMapping(path="/character/new", consumes= {"application/json"})
	public ResponseEntity<DnDCharacter> addCharacter(@RequestBody DnDCharacter dndchar) {
		
		System.out.println("Writing to Database: ");
		System.out.println(dndchar);
		
		try {
			DnDUser creator = userRepo.findByUserID(dndchar.getCreator());
			dndchar.setCreator(creator);
			dndchar.setDatecreated(new Date());
			return new ResponseEntity(charRepo.save(dndchar), HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.CONFLICT);
		}
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
