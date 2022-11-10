import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VQuinielaComponent } from './v-quiniela.component';

describe('VQuinielaComponent', () => {
  let component: VQuinielaComponent;
  let fixture: ComponentFixture<VQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VQuinielaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
