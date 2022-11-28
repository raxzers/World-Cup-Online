import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';

import { TeamService } from './team.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
}

describe('TeamService', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let service: TeamService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new TeamService(httpClientSpy as any);
    /*
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(TeamService);
    */
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Enviar un equipo con los datos nulos', (done: DoneFn) => {
    const equipo = { ID: null, Club: null };
    const error_ = {
      error: "Datos incorrectos",
      status: 409,
      statusText: "Datos nulos"
    }
    httpClientSpy.post.and.returnValue(throwError(error_))
    service.guardarEquipo(equipo).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(409);
        done();
      })
  });

});
