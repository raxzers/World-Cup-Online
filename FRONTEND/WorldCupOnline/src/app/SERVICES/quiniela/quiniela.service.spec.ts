import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { QuinielaService } from './quiniela.service';

describe('QuinielaService', () => {
  let service: QuinielaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, ToastrModule.forRoot()]
    });
    service = TestBed.inject(QuinielaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
