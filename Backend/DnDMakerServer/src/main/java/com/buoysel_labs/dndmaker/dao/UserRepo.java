package com.buoysel_labs.dndmaker.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buoysel_labs.dndmaker.model.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
