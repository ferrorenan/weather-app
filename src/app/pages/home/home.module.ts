import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {BoardComponent} from "../../components/board/board.component";
import {CardWeatherComponent} from "../../components/card-weather/card-weather.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardWeatherComponent
  ]
})
export class HomeModule { }
