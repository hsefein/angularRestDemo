import {Component, Input, OnInit} from '@angular/core';
import {PersonTaskService} from '../service/persontask-service';
import {Person} from '../model/person';
import {PersonService} from '../service/person-service';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonTask} from '../model/persontask';

@Component({
  selector: 'app-persontask-list',
  templateUrl: './persontask-list.component.html',
  styleUrls: ['./persontask-list.component.css']
})
export class PersontaskListComponent implements OnInit {

  personTasks: PersonTask[] = [];

  @Input()
  person: Person;

  constructor(
    public personTaskService: PersonTaskService,
    public personService: PersonService,
    protected router: Router,
    protected activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(value => {
      this.personService.get(value['id'], [{key: 'projection', value: 'detail'}])
        .subscribe(person => {
          this.person = person;
          person.getRelation(PersonTask, 'personTasks').subscribe(personTaskList => {
          });
          this.person = person;

          this.personTaskService.search('findByPersonId', {params: [
              {key: 'projection', value: 'detail'},
              {key: 'person_id', value: this.person.id}
            ]}).subscribe(value2 => {
              this.personTasks = value2;
          });
        });
    });
  }

  ngOnInit() {
  }

}
