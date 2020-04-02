package com.buoysel_labs.dndmaker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.buoysel_labs.dndmaker.dao.UserRepo;
import com.buoysel_labs.dndmaker.model.DnDUser;

@RestController
public class UserController {

	@Autowired
	UserRepo userRepo;
	
	@PostMapping(path="/user",consumes= {"application/json"})
	public DnDUser addUser(@RequestBody DnDUser user) {
		return userRepo.save(user);
	}
	
	@GetMapping(path="/user/{uid}")
	public DnDUser getUser(@PathVariable("uid") int uid) {
		return userRepo.findByUserID(uid);
	}
	
	@PutMapping(path="/user/{uid}")
	public DnDUser updateUser(@RequestBody DnDUser user) {
		return userRepo.save(user);
	}
	
}
