import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {CardWeatherDataComponent} from "../../components/card-weather-data/card-weather-data.component";
import {CardLocalizationComponent} from "../../components/card-localization/card-localization.component";
import {WeatherService} from "../../services/weather.service";
import {PictureComponent} from "../../components/picture/picture.component";
import {LocalizationService} from "../../services/localization.service";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardWeatherDataComponent,
    CardLocalizationComponent,
    PictureComponent
  ],
  providers: [
    WeatherService,
    LocalizationService
  ]
})
export class HomeModule {
}
