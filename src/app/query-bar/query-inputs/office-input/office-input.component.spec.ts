import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeInputComponent } from './office-input.component';

describe('OfficeInputComponent', () => {
  let component: OfficeInputComponent;
  let fixture: ComponentFixture<OfficeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
