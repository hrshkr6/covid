import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-graph',
  templateUrl: './state-graph.component.html',
  styleUrls: ['./state-graph.component.css']
})
export class StateGraphComponent implements OnInit {
  @Input() sName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
