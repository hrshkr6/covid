import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { StatesComponent } from './states/states.component';
import { StatesNavComponent } from './states/states-nav/states-nav.component'; 
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { StateInfoComponent } from './states/state-info/state-info.component';
 
import { StateGraphComponent } from './states/state-graph/state-graph.component';
import { StateMapComponent } from './states/state-map/state-map.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    StatesComponent,
    StatesNavComponent,
    StateInfoComponent,
 
    StateGraphComponent,
    StateMapComponent, 
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYW51cmFnaGFyc2gxNTMiLCJhIjoiY2t2YnU2ZW11MDJycTJ3cTVscG4yaG5odCJ9.1qyxc0kiA18KHJ_YpUW2ew', // Optional, can also be set per map (accessToken input of mgl-map)
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
