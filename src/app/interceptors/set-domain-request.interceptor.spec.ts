import { TestBed } from '@angular/core/testing';

import { SetDomainRequestInterceptor } from './set-domain-request.interceptor';

describe('SetDomainRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetDomainRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetDomainRequestInterceptor = TestBed.inject(SetDomainRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
