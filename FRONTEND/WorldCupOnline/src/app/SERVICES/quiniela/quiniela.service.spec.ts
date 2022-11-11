import { TestBed } from '@angular/core/testing';

import { QuinielaService } from './quiniela.service';

describe('QuinielaService', () => {
  let service: QuinielaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuinielaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
