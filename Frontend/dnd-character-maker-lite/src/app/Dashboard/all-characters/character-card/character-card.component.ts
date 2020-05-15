import { Component, OnInit, Input } from '@angular/core';
import { DnDCharacter } from 'src/app/model/DnDCharacter';
import { Router } from '@angular/router'

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: DnDCharacter;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onView(character) {
    this.router.navigate(['/character/view/', this.character.charID]);
  }

  onEdit(character) {
    this.router.navigate(['/character/edit', this.character.charID]);
  }

}
