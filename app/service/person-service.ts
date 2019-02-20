import {Person} from '../model/person';
import {RestService} from 'angular4-hal';
import {Injectable, Injector} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends RestService <Person> {
  constructor(injector: Injector) {
    super(Person, 'persons', injector);
  }
}
