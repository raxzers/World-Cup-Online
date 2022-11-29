import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { RankingService } from 'src/app/SERVICES/ranking/ranking.service';

import { VRankingComponent } from './v-ranking.component';

describe('VRankingComponent', () => {
  let component: VRankingComponent;
  let fixture: ComponentFixture<VRankingComponent>;
  let service: RankingService;
  let injector: TestBed;
 // let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VRankingComponent],
      imports: [ReactiveFormsModule , ToastrModule.forRoot(), HttpClientModule, MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
      .compileComponents();
    injector = getTestBed();
    service = injector.get(RankingService);
   // httpMock = injector.get(HttpTestingController);
    fixture = TestBed.createComponent(VRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  const dummyUserListResponse = {
    data: [
      { id: 1, first_name: 'George', last_name: 'Bluth', avatar: '' },
      { id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: '' },
      { id: 3, first_name: 'Emma', last_name: 'Wong', avatar: '' },
    ],
  };
  it('test getHeaderData()', async () => {
    const serviceSpy: RankingService = TestBed.get(RankingService);
    spyOn(serviceSpy, 'obtenerRankings').and.returnValue(Promise.resolve([]));
    expect( component.obtenerClub()).toBe();
    expect( await serviceSpy.obtenerRankings).toHaveBeenCalled();
    
  });
});
