import { Component } from '@angular/core';
import {LocalizationService} from "../../services/localization.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private locationService: LocalizationService
  ) {}

  getLocalizaionClientLatAndAlt(): void {

    this.locationService.getPosition().then(pos=>
    {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }
}
