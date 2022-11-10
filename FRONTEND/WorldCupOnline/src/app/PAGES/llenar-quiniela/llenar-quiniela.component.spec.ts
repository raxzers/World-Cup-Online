import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenarQuinielaComponent } from './llenar-quiniela.component';

describe('LlenarQuinielaComponent', () => {
  let component: LlenarQuinielaComponent;
  let fixture: ComponentFixture<LlenarQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlenarQuinielaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlenarQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
