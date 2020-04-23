import { Component, OnInit } from '@angular/core';
import { DnDCharacter } from 'src/app/model/DnDCharacter';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  private characters:DnDCharacter[];

  constructor(
    private userservice: UserService,
    private router: Router

  ) { }

  ngOnInit() {
    this.characters = this.userservice.getCurrentUser().characters;
    console.log(this.characters)
  }

}
