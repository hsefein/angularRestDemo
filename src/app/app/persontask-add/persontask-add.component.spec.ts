import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontaskAddComponent } from './persontask-add.component';

describe('PersontaskAddComponent', () => {
  let component: PersontaskAddComponent;
  let fixture: ComponentFixture<PersontaskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontaskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
