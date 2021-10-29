import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class CountryService {
  constructor(private http: HttpClient) {}

  

  getCountryData() {
    return this.http.get<any[]>(
      'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
      {headers:{
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': '5cc3d0f69emsha6d477247b90477p114987jsnc43317d839b3'
      }}
    );
  }
}
