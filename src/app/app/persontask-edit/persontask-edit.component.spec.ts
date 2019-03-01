import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontaskEditComponent } from './persontask-edit.component';

describe('PersontaskEditComponent', () => {
  let component: PersontaskEditComponent;
  let fixture: ComponentFixture<PersontaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
