import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {FormControl} from '@angular/forms';
import {TaskService} from '../service/task-service';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../service/person-service';
import {Person} from '../model/person';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  TaskName = new FormControl();
  // PersonName = new FormControl();

  @Input()
  person: Person;

  public tasks: Task[] = [];

  constructor(
    public taskService: TaskService,
    protected router: Router) {}

  ngOnInit() {
    this.taskService.getAll().subscribe(value => {
      this.tasks = value;
    });

  }

  add(): void {
    const task: Task = new Task();
    task.name = this.TaskName.value;

    this.taskService.create(task).subscribe(value => {
      this.ngOnInit();
      this.router.navigate(['/home']);
    });

  }
}
