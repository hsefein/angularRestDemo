import {Component, Inject, OnInit} from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../service/person-service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss']
})
export class PersonAddComponent implements OnInit {

  persons: Person[] = [];
  PersonName = new FormControl();
  PersonDate = new FormControl();

  constructor(public personService: PersonService,
              protected router: Router,
              public dialogRef: MatDialogRef<PersonAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
              ) {
  }

  ngOnInit(): void {
    this.personService.getAll().subscribe(value => {
      this.persons = value;
    });
  }

  add() {
    const person: Person = new Person();
    person.name = this.PersonName.value;
    person.dob = this.PersonDate.value;

    this.personService.create(person).subscribe(value => {
      this.ngOnInit();
      console.log('success');
      this.dialogRef.close({success: true});
      // this.router.navigate(['home']);
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
