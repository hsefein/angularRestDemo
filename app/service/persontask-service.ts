import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {PersonTask} from '../model/persontask';


@Injectable({
  providedIn: 'root'
})

export class PersonTaskService extends RestService <PersonTask> {
  constructor(injector: Injector) {
    super(PersonTask, 'personTasks', injector);
  }
}
