import { Component, OnInit } from '@angular/core';
import { DnDCharacter } from 'src/app/model/DnDCharacter';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character/character.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  private characters:DnDCharacter[];

  constructor(
    private userservice: UserService,
    private charservice: CharacterService,
    private router: Router

  ) { }

  ngOnInit() {
    this.characters = this.getAllCharacters();
  }

  newCharacter() {
    this.router.navigate(['/character/create']); 
  }

  getAllCharacters(): DnDCharacter[] {
    let foundChars: DnDCharacter[];
    this.charservice.getAllCharacters(this.userservice.getCurrentUser().userID)
      .subscribe((resp: HttpResponse<DnDCharacter[]>) => {
        this.characters = resp.body as DnDCharacter[];
      },
      (error: HttpResponse<DnDCharacter>) => {
        console.log("Something went wrong retrieving the characters");
        console.log(error.body);
        foundChars = null;
      });

    return foundChars;
  }

}
