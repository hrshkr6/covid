import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-map',
  templateUrl: './state-map.component.html',
  styleUrls: ['./state-map.component.css']
})
export class StateMapComponent implements OnInit {
  lat:string="15.491997"
  lng:string="73.81800065"
  constructor() { }

  ngOnInit(): void {
  }


  

}
