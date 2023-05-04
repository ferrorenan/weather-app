import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ImageComponent} from "../../components/image/image.component";
import {CardWeatherDataComponent} from "../../components/card-weather-data/card-weather-data.component";
import {CardLocalizationComponent} from "../../components/card-localization/card-localization.component";
import {WeatherService} from "../../services/weather.service";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ImageComponent,
    CardWeatherDataComponent,
    CardLocalizationComponent
  ],
  providers: [
    WeatherService
  ]
})
export class HomeModule {
}
