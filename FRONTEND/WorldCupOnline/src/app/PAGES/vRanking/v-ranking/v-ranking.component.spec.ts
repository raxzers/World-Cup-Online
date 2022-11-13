import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { VRankingComponent } from './v-ranking.component';

describe('VRankingComponent', () => {
  let component: VRankingComponent;
  let fixture: ComponentFixture<VRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRankingComponent ],
      imports:[HttpClientModule, ToastrModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
