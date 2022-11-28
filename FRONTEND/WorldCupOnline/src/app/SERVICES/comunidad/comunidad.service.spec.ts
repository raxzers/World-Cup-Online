import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

import { ComunidadService } from './comunidad.service';

describe('ComunidadService', () => {
  let service: ComunidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientModule,
      ToastrModule, MatDialogModule
    ]});
    service = TestBed.inject(ComunidadService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
