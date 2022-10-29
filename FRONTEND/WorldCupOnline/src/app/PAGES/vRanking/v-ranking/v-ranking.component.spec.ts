import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRankingComponent } from './v-ranking.component';

describe('VRankingComponent', () => {
  let component: VRankingComponent;
  let fixture: ComponentFixture<VRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VRankingComponent ]
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
