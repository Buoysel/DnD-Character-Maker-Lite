package com.buoysel_labs.dndmaker.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buoysel_labs.dndmaker.model.DnDUser;

public interface UserRepo extends JpaRepository<DnDUser, Integer>{
	public DnDUser findByUsername(String username);

	public DnDUser findByUserID(int uid);
}
