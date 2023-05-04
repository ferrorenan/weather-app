import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class SetDomainRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const requestUrlUpdated = request
      .clone({
        url: `${environment.url_api}${request.url}`,
      });

    console.log(requestUrlUpdated)

    return next.handle(requestUrlUpdated);
  }
}
