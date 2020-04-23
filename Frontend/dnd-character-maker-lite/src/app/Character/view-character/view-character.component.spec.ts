import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterComponent } from './view-character.component';

describe('ViewCharacterComponent', () => {
  let component: ViewCharacterComponent;
  let fixture: ComponentFixture<ViewCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
