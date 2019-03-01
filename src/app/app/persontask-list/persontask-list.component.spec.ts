import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontaskListComponent } from './persontask-list.component';

describe('PersontaskListComponent', () => {
  let component: PersontaskListComponent;
  let fixture: ComponentFixture<PersontaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
