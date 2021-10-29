import { Component, Input, OnInit } from '@angular/core';
import { StateData } from './state';
import { StateInfoService } from './state-info.service';
import { IStateInfo, stateInfoData } from './state-info.constant';


@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.css']
})
export class StateInfoComponent implements OnInit {
  button:number=0;
  allData: any[];
  stateN:string;
  @Input()stateData: StateData;
  name: string = 'Goa';
  stateDataInfo:IStateInfo[] = stateInfoData 
  constructor(private stateInfoService: StateInfoService) { }

  ngOnInit(): void {
    this.stateInfoService.getStateData().subscribe((data) => {
      this.allData = data;

      let stateResponse = this.allData.find((res) => {
        return res.province === this.name;
      });
      console.log("value output",this.allData,stateResponse);
      
      this.stateData = {
        totalStateCases: stateResponse.confirmed,
        totalStateDeaths: stateResponse.deaths,
        totalRecovered: stateResponse.recovered,
        positiveCases: stateResponse.active,
        Recovery_Proporation: stateResponse.Recovery_Proporation,
      };
    });
  }

  onClick(n:number){
    this.button=n;
  }

}
