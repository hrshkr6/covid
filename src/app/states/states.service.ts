import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class StateService{
    constructor(private http: HttpClient){}


    getStatesData(){
       return this.http.get<any[]>(
           "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/ind",
           {
               headers:{
                'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
                'x-rapidapi-key': '5cc3d0f69emsha6d477247b90477p114987jsnc43317d839b3'
               }
           }
       )
    }
}