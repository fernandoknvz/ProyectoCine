import { TestBed } from '@angular/core/testing';

import { CarteleraCineApiService } from './cartelera-cine-api.service';

describe('CarteleraCineApiService', () => {
  let service: CarteleraCineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteleraCineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
