import { Injectable } from '@angular/core';

@Injectable()
export class LocalizationService {

  constructor() { }

  getPosition(): Promise<any>{

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}
