import { Component, OnInit, Input, forwardRef } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input() node;

  constructor() { }

  ngOnInit() {
  }

}
