import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {  ToastrModule } from 'ngx-toastr';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        ToastrModule.forRoot()
      ]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
