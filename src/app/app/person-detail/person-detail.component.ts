import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../model/person';
import {FormControl} from '@angular/forms';
import {PersonService} from '../service/person-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public persons: Person[] = [];
  PersonName = new FormControl();
  PersonDate = new FormControl();

  @Input()
  person: Person;

  constructor(
    public personService: PersonService,
    protected router: Router,
    protected activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(value => {
      this.personService.get(value['id'], [{key: 'projection', value: 'detail'}])
        .subscribe(person => {
          this.person = person;
        });
    });
  }

  ngOnInit() {
  }

}
