import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 
    totalCases: number
    totalDeaths: number
    totalTests: string
    populationTested: number
    positiveCases: number
    lastUpdated: number
    newCases:number
   

  constructor(private countryService: CountryService) { 
    this.countryService.getCountryData()
    .subscribe(
      (data) =>{ 
        let indiaData=data.find(res =>{
        return res.id==="01f1ddda-5e28-4baf-97d2-1b7512929ce4"
        })
        console.log(indiaData)
        this.totalCases=indiaData.TotalCases;
        this.totalDeaths=indiaData.TotalDeaths;
        this.populationTested=indiaData.Test_Percentage;
        this.positiveCases=indiaData.ActiveCases;
        this.totalTests=indiaData.TotalTests;
        this.newCases=indiaData.NewCases;
       })
  }

  ngOnInit(): void {
    
    
  }





}
