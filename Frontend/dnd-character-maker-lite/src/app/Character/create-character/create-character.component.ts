import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CharacterService } from '../../services/character/character.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DnDCharacter } from 'src/app/model/DnDCharacter';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  private createForm: FormGroup;
  private createAttempted: boolean = false;
  private errorMessage: string = 'All fields are required.';

  // Identity
  get charName() {
    return this.createForm.get('charName');
  }

  get charClass() {
    return this.createForm.get('charClass');
  }
  

  // Stats
  get charLevel() {
    return this.createForm.get('charLevel');
  }

  get charHP() {
    return this.createForm.get('charHP');
  }

  get charSTR() {
    return this.createForm.get('charSTR');
  }

  get charDEX() {
    return this.createForm.get('charDEX');
  }

  get charCON() {
    return this.createForm.get('charCON');
  }

  get charINT() {
    return this.createForm.get('charINT');
  }

  get charWIS() {
    return this.createForm.get('charWIS');
  }

  get charCHA() {
    return this.createForm.get('charCHA');
  }


  //Biography

  get charRace() {
    return this.createForm.get('charRace');
  }

  get charBackground() {
    return this.createForm.get('charBackground');
  }

  get charAlignment() {
    return this.createForm.get('charAlignment');
  }



  constructor(
    private fb: FormBuilder,
    private charService: CharacterService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      charName: ['',[Validators.required]],
      charClass: ['',[Validators.required]],
      charLevel: ['',[Validators.required]],
      charSTR: ['',[Validators.required]],
      charHP: ['', [Validators.required]],
      charDEX: ['',[Validators.required]],
      charCON: ['',[Validators.required]],
      charINT: ['',[Validators.required]],
      charWIS: ['',[Validators.required]],
      charCHA: ['',[Validators.required]],
      charRace: ['',[Validators.required]],
      charBackground: ['',[Validators.required]],
      charAlignment: ['',[Validators.required]],
    })
  }

  createCharacter(charData) {

    let newCharacter: DnDCharacter = new DnDCharacter();
    
    newCharacter.name = charData.charName;
    newCharacter.charClass = charData.charClass;

    newCharacter.level = charData.charLevel;
    newCharacter.hitpoints = charData.charHP;
    newCharacter.strength = charData.charSTR;
    newCharacter.dexterity = charData.charDEX;
    newCharacter.constitution = charData.charCON;
    newCharacter.intelligence = charData.charINT;
    newCharacter.wisdom = charData.charWIS;
    newCharacter.charisma = charData.charCHA;

    newCharacter.race = charData.charRace;
    newCharacter.background = charData.charBackground;
    newCharacter.alignment = charData.charAlignment;

    newCharacter.creator = this.userService.getCurrentUser();

    console.log("Sending to Character Service: ");
    console.log(newCharacter);
    this.charService.addNewCharacter(newCharacter)
      .subscribe((resp: HttpResponse<DnDCharacter>) => {
        console.log("Charcter saved successfully")
      },
      (error: HttpResponse<DnDCharacter>) => {
        switch(error.status) {
          default:
            console.log("We'll be right back.")
            break;
        }
      });
  }

}
