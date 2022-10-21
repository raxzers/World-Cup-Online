import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFootballGameComponent } from './new-football-game.component';

describe('NewFootballGameComponent', () => {
  let component: NewFootballGameComponent;
  let fixture: ComponentFixture<NewFootballGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFootballGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFootballGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
