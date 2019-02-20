import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task';
import {TaskService} from '../service/task-service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAll({
      params: [
        {key: 'projection', value: 'detail'}
      ]
    }).subscribe(value => {
      this.tasks = value;
    });
  }

  delete(task: Task) {
    this.taskService.delete(task).subscribe(value => {
      this.ngOnInit();
    });
  }
}
