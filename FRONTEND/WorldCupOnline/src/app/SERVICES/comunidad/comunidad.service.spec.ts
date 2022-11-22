import { TestBed } from '@angular/core/testing';

import { ComunidadService } from './comunidad.service';

describe('ComunidadService', () => {
  let service: ComunidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
