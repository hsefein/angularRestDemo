import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {Task} from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService extends RestService <Task> {
  constructor(injector: Injector) {
    super(Task, 'tasks', injector);
  }
}
