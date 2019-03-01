import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../service/person-service';
import {MatDialog} from '@angular/material';
import {PersonAddComponent} from '../person-add/person-add.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(public personService: PersonService, protected dialog: MatDialog) { }

  ngOnInit(): void {
    this.personService.getAll({
      params: [
        {key: 'projection', value: 'detail'}
      ]
    }).subscribe(value => {
      this.persons = value;
    });
  }

  delete(person: Person) {
    this.personService.delete(person).subscribe(value => {
      this.ngOnInit();
    });
  }

  addPersonPopUp() {
    const dialogRef = this.dialog.open(PersonAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed');
      console.log(result);
      this.ngOnInit();
    });
  }
}
