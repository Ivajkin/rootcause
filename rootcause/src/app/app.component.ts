import { Component } from '@angular/core';

class Task {
  task: string;
  w5h2?: string;
  causes?: Array<Task>;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rootcause';
  topTasks: Array<Task> = [
    {
      task: 'test1',
      causes: []
    },
    {
      task: 'test2',
      causes: []
    }
  ];
}
