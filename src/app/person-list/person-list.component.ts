import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../service/person-service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(public personService: PersonService) { }

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
}
