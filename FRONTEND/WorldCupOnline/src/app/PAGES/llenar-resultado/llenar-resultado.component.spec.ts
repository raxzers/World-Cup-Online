import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenarResultadoComponent } from './llenar-resultado.component';

describe('LlenarResultadoComponent', () => {
  let component: LlenarResultadoComponent;
  let fixture: ComponentFixture<LlenarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenarResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlenarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
