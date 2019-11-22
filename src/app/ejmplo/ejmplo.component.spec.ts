import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmploComponent } from './ejmplo.component';

describe('EjmploComponent', () => {
  let component: EjmploComponent;
  let fixture: ComponentFixture<EjmploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjmploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjmploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
