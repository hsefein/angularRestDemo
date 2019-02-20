import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../service/person-service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  persons: Person[] = [];
  PersonName = new FormControl();
  PersonDate = new FormControl();

  constructor(public personService: PersonService, protected router: Router) {
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
      this.router.navigate(['home']);
    });
  }

}
