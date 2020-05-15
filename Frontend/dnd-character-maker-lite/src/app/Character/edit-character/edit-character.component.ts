import { Component, OnInit } from '@angular/core';
import { DnDCharacter } from 'src/app/model/DnDCharacter';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character/character.service';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  private character: DnDCharacter = null;

  private editForm: FormGroup;
  private createAttempted: boolean = false;
  private errorMessage: string = 'All fields are required.';

  // Identity
  get charName() {
    return this.editForm.get('charName');
  }

  get charClass() {
    return this.editForm.get('charClass');
  }
  

  // Stats
  get charLevel() {
    return this.editForm.get('charLevel');
  }

  get charHP() {
    return this.editForm.get('charHP');
  }

  get charSTR() {
    return this.editForm.get('charSTR');
  }

  get charDEX() {
    return this.editForm.get('charDEX');
  }

  get charCON() {
    return this.editForm.get('charCON');
  }

  get charINT() {
    return this.editForm.get('charINT');
  }

  get charWIS() {
    return this.editForm.get('charWIS');
  }

  get charCHA() {
    return this.editForm.get('charCHA');
  }


  //Biography

  get charRace() {
    return this.editForm.get('charRace');
  }

  get charBackground() {
    return this.editForm.get('charBackground');
  }

  get charAlignment() {
    return this.editForm.get('charAlignment');
  }

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('charid'))
    this.getCharacterData(id);
  }

  getCharacterData(charID) {
    this.charService.getCharacterById(charID)
      .subscribe((resp: HttpResponse<DnDCharacter>) => {
        this.character = resp.body as DnDCharacter;
        console.log(this.character);
        this.editForm = this.fb.group({
          charName: [this.character.name, [Validators.required]],
          charClass: [this.character.charClass,[Validators.required]],
          charLevel: [this.character.level,[Validators.required]],
          charSTR: [this.character.strength,[Validators.required]],
          charHP: [this.character.hitpoints, [Validators.required]],
          charDEX: [this.character.dexterity,[Validators.required]],
          charCON: [this.character.constitution,[Validators.required]],
          charINT: [this.character.intelligence,[Validators.required]],
          charWIS: [this.character.wisdom,[Validators.required]],
          charCHA: [this.character.charisma,[Validators.required]],
          charRace: [this.character.race,[Validators.required]],
          charBackground: [this.character.background,[Validators.required]],
          charAlignment: [this.character.alignment,[Validators.required]],
        })
      },
      (error: HttpResponse<DnDCharacter>) => {
        switch(error.status) {
          case 404:
            console.log("Character is not found");
            break;
          default:
            console.log("Something went wrong. Please try again later");
            break;
        }
      })
  }

  updateCharcter(charData) {

    this.character.name = charData.charName;
    this.character.charClass = charData.charClass;

    this.character.level = charData.charLevel;
    this.character.hitpoints = charData.charHP;
    this.character.strength = charData.charSTR;
    this.character.dexterity = charData.charDEX;
    this.character.constitution = charData.charCON;
    this.character.intelligence = charData.charINT;
    this.character.wisdom = charData.charWIS;
    this.character.charisma = charData.charCHA;

    this.character.race = charData.charRace;
    this.character.background = charData.charBackground;
    this.character.alignment = charData.charAlignment;

    this.character.creator = this.userService.getCurrentUser();


    console.log("Sending to Character Service: ");
    console.log(this.character);
    this.charService.updateCharacter(this.character)
      .subscribe((resp: HttpResponse<DnDCharacter>) => {
        console.log("Character updated successfully")
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
