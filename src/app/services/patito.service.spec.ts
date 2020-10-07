import { TestBed } from '@angular/core/testing';

import { PatitoService } from './patito.service';

describe('PatitoService', () => {
  let service: PatitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
