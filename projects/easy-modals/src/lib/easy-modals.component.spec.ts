import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyModalsComponent } from './easy-modals.component';

describe('EasyModalsComponent', () => {
  let component: EasyModalsComponent;
  let fixture: ComponentFixture<EasyModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
