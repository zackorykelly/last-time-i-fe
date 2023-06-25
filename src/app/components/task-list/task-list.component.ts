import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];

  ngOnInit() {
    this.tasks.push({
      title: 'Take out the trash',
      description: 'Take out the trash to the curb',
      frequencyDays: 7,
      completions: [new Date(), new Date()]
    });
    this.tasks.push({
      title: 'Take out the trash',
      description: 'Take out the trash to the curb',
      frequencyDays: 7,
      completions: []
    });
    this.tasks.push({
      title: 'Take out the trash',
      description: 'Take out the trash to the curb',
      frequencyDays: 7,
      completions: [new Date()]
    });
  }
}
