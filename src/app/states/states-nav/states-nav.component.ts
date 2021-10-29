import { Component, OnInit } from '@angular/core';
import { SatateGraphService } from '../state-graph/state-graph.service';
import { StateData } from '../state-info/state';
import { StateInfoService } from '../state-info/state-info.service';
import {Chart, registerables} from 'chart.js'
import {map} from "rxjs/operators"
 

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

   chart :any;

  constructor(private statesService : StateService,
    private stateInfoService : StateInfoService,
    private stateGraphService : SatateGraphService
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

graphUpdate(name:string){
   this.stateGraphService.getStateCode().pipe(map((response:any)=>{
      return response.data;   
   })).subscribe(res =>{
       this.stateNameAndCode=res;
     
   const stateCode = this.stateNameAndCode.find(val=>{
    return name===val.name;
  })
  console.log(stateCode.code);
     
       
       
       
   })

   this.stateGraphService.getStateHistory('KA').pipe(map((response:any)=>{
      console.log(response);
      
   })).subscribe(res=>{

   })
}  

  

}
