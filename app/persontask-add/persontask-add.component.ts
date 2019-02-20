import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../model/person';
import {Task} from '../model/task';
import {FormControl} from '@angular/forms';
import {PersonTaskService} from '../service/persontask-service';
import {PersonService} from '../service/person-service';
import {TaskService} from '../service/task-service';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonTask} from '../model/persontask';

@Component({
  selector: 'app-persontask-add',
  templateUrl: './persontask-add.component.html',
  styleUrls: ['./persontask-add.component.css']
})
export class PersontaskAddComponent implements OnInit {

  @Input()
  person: Person;
  public tasks: Task[] = [];

  PersonName = new FormControl();
  TaskName = new FormControl();

  constructor(
    public personTaskService: PersonTaskService,
    public personService: PersonService,
    public taskService: TaskService,
    protected router: Router,
    public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(value => {
      this.personService.get(value['id']).subscribe( person => {
        this.person = person;
        this.PersonName.setValue(this.person.name);
        this.taskService.getAll().subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      });
    });
  }

  addPersonTask(): void {
    const personTask: PersonTask = new PersonTask();

    personTask.task = this.TaskName.value;
    personTask.person = this.person;

    this.personTaskService.create(personTask).subscribe(value => {
      // this.ngOnInit();
      this.router.navigate(['/home']);
    });
  }
}
