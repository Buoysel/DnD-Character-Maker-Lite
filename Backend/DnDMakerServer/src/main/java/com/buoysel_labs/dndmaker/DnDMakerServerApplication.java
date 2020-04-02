package com.buoysel_labs.dndmaker;



import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.buoysel_labs.dndmaker.model.DnDCharacter;
import com.buoysel_labs.dndmaker.model.DnDUser;

@SpringBootApplication
public class DnDMakerServerApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(DnDMakerServerApplication.class, args);
		
		/**
		 * Fix up loading on either the User or Character model.
		 * 
		 * The app returns a Character, who gets its User, who
		 * is aware of its characters, who each know their user,
		 * and so on.
		 * 
		 */
		
	}

	
}
