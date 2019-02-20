import {Resource} from 'angular4-hal';

class Tasks {
}

export class Person extends Resource {
  id: number;
  name: string;
  dob: Date;
  tasks: Tasks[];
}
