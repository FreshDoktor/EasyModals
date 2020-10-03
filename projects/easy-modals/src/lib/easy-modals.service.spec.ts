import { TestBed } from '@angular/core/testing';

import { EasyModalsService } from './easy-modals.service';

describe('EasyModalsService', () => {
  let service: EasyModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
