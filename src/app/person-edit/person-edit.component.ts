import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../service/person-service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  @Input()
  person: Person;
  PersonName = new FormControl();

  constructor(
    public personService: PersonService,
    protected router: Router,
    protected activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(value => {
      this.personService.get(value['id'], [{key: 'projection', value: 'detail'}])
        .subscribe(person => {
          this.person = person;
          this.PersonName.setValue(this.person.name);
        });
    });
  }

  ngOnInit() {
  }

  editPerson(): void {
    this.person.name = this.PersonName.value;
    this.personService
      .update(this.person)
      .subscribe(value => {
        this.ngOnInit();
      });
    this.router.navigate(['/person-list']);
  }
}
