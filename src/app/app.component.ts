import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // directives: [TreeNode]
})
export class AppComponent {
  name: string;
  title = 'app';

  constructor() {
    this.name = 'Angular2 (Release Candidate!)'
  }

  node = {name: 'root', children: [
    {name: 'a', children: []},
    {name: 'b', children: []},
    {name: 'c', children: [
      {name: 'd', children: []},
      {name: 'e', children: []},
      {name: 'f', children: []},
     ]},
  ]}; 
}
