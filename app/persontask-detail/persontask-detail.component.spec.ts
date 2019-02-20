import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontaskDetailComponent } from './persontask-detail.component';

describe('PersontaskDetailComponent', () => {
  let component: PersontaskDetailComponent;
  let fixture: ComponentFixture<PersontaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontaskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
