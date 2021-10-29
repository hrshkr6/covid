import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:"root"
})

export class SatateGraphService{

    constructor(private http : HttpClient){
    }

    getStateCode(){
        return this.http.get(
            "https://covid-19-india-data-by-zt.p.rapidapi.com/GetIndiaStateCodesAndNames",
            {
                headers: {
                    'x-rapidapi-host': 'covid-19-india-data-by-zt.p.rapidapi.com',
                    'x-rapidapi-key': '5cc3d0f69emsha6d477247b90477p114987jsnc43317d839b3'
                  }
            }
        )
    }

    getStateHistory(code:string){
        return this.http.get(
            'https://covid-19-india-data-by-zt.p.rapidapi.com/GetIndiaAllHistoricalDataForState',
            {
                params: {statecode:code},
                headers: {
                  'x-rapidapi-host': 'covid-19-india-data-by-zt.p.rapidapi.com',
                  'x-rapidapi-key': '5cc3d0f69emsha6d477247b90477p114987jsnc43317d839b3'
                }
            }
        )
    }
   
}