import { TestBed } from '@angular/core/testing';

import { PhpAPIService } from './php-api.service';

describe('PhpAPIService', () => {
  let service: PhpAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
