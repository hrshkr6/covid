import { Component, OnInit } from '@angular/core';
 
import { StateData } from '../state-info/state';
import { StateInfoService } from '../state-info/state-info.service';
import {Chart, registerables} from 'chart.js'
import {map} from "rxjs/operators"
import states from '../../data/state-geo-data.json'
 

import { StateService } from '../states.service';

@Component({
  selector: 'app-states-nav',
  templateUrl: './states-nav.component.html',
  styleUrls: ['./states-nav.component.css']
})
export class StatesNavComponent implements OnInit {
   newStateData : StateData;
   allData :any[];
   sName:string;
   statesName:string[]
   stateNameAndCode:{code:string,name:string}[];
   lng1:string="73.81800065";
   lat1:string="15.491997";

   chart :any;

   stateGeo:{name:string,lat:string,lng:string}[]=states;

  constructor(private statesService : StateService,
    private stateInfoService : StateInfoService 
    ) { }

  ngOnInit(): void {

    Chart.register(...registerables)
    
    this.chart =document.getElementById("my_firstChart")
    this.loadChart()
    

    this.statesService.getStatesData()
    .subscribe(
      data=>{
        let states =[]
        data.forEach(val=>{
          states.push(val.province)
        })

       this.statesName=states
        
      }
    )
    this.stateInfoService.getStateData().subscribe((data) => {
      this.allData = data;
    });

    
  }

  loadChart(){
 new Chart(this.chart,{
   type:'line',
   data:{
     datasets:[{
       data:[30,40,50,60,70,67,98,76],
       label:'series 1',
       backgroundColor:"#007bff"
     }]
   }
 })
  }


onStateChange(stateName:string){
  this.graphUpdate(stateName)
  const geo = this.updateGeo(stateName)

  
  
  

   
    this.sName=stateName;

    let stateResponse = this.allData.find((res) => {
      return res.province === stateName;
    });
    console.log(stateName,stateResponse)
    
    
    this.newStateData = {
      totalStateCases: stateResponse.confirmed,
      totalStateDeaths: stateResponse.deaths,
      totalRecovered: stateResponse.recovered,
      positiveCases: stateResponse.active,
      Recovery_Proporation: stateResponse.Recovery_Proporation,
    };

 
  
}

updateGeo(state:string){
 
  const singleStateGeo= this.stateGeo.find(res=>{
    return res.name===state;
  })
  this.lat1 = singleStateGeo.lat;
  this.lng1 = singleStateGeo.lng;
  console.log(singleStateGeo)
  
}

graphUpdate(name:string){
   
     
  
}  

  

}
