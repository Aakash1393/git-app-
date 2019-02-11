import { TestBed } from '@angular/core/testing';

import { GatService } from './gat.service';

describe('GatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatService = TestBed.get(GatService);
    expect(service).toBeTruthy();
  });
});
