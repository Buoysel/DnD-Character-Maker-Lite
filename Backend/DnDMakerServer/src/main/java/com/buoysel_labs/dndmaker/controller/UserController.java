package com.buoysel_labs.dndmaker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.buoysel_labs.dndmaker.dao.UserRepo;
import com.buoysel_labs.dndmaker.model.DnDUser;

@RestController
public class UserController {

	@Autowired
	UserRepo userRepo;
	
	
	public void SubmitSampleUser(DnDUser user) {
		userRepo.save(user);
	}
	
	@PostMapping(path="/user",consumes= {"application/json"})
	public DnDUser addUser(@RequestBody DnDUser user) {
		userRepo.save(user);
		return user;
	}
	
//	@GetMapping(path="/user")
//	public DnDUser getUser() {
//		DnDUser buoysel = new DnDUser();
//		buoysel.setUsername("buoysel");
//		buoysel.setEmail("firstone1993@msn.com");
//		buoysel.setPassword("mypass");
//
//		userRepo.save(buoysel);
//		return buoysel;
//	}
	
	
}
