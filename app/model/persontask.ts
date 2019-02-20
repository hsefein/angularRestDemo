import {Resource} from 'angular4-hal';
import {Person} from './person';
import {Task} from './task';

export class PersonTask extends Resource {

  id: number;
  person: Person;
  task: Task;
}
