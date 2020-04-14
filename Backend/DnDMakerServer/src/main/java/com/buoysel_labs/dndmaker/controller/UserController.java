package com.buoysel_labs.dndmaker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.buoysel_labs.dndmaker.dao.CharacterRepo;
import com.buoysel_labs.dndmaker.dao.UserRepo;
import com.buoysel_labs.dndmaker.model.DnDUser;

@RestController
public class UserController {

	@Autowired
	UserRepo userRepo;
	
	@Autowired
	CharacterRepo charRepo;
	
	@PostMapping(path="/user/newUser",consumes= {"application/json"})
	public DnDUser addUser(@RequestBody DnDUser user) {
		return userRepo.save(user);
	}
	
	@GetMapping(path="/user/id={uid}")
	public DnDUser getUser(@PathVariable("uid") int uid) {
		return userRepo.findByUserID(uid);
	}
	
	@GetMapping(path="/user/uname={uname}&upass={upass}")
	public ResponseEntity<DnDUser> getUser(@PathVariable("uname") String uname, @PathVariable("upass") String upass) {
		
		DnDUser login = userRepo.findByUsername(uname);
		
		if (login != null) {
			
			if (login.getPassword().equals(upass)) {
				
				login.setPassword("");
				
				return new ResponseEntity<>(login, HttpStatus.OK);
				
			} else {
				//Login failed
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}
	
	@PutMapping(path="/user/{uid}")
	public DnDUser updateUser(@RequestBody DnDUser user) {
		return userRepo.save(user);
	}
	
}
