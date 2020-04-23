import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DnDCharacter } from 'src/app/model/DnDCharacter';
import { HttpResponse } from '@angular/common/http';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  //Change the login, so the user doesn't immediately get their list
  // of characters, until they view the dashboard.
  private character: DnDCharacter;

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService

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

}
