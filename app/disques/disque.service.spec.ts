import { TestBed, inject } from '@angular/core/testing';

import { DisqueService } from './disque.service';

describe('DisqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisqueService]
    });
  });

  it('should be created', inject([DisqueService], (service: DisqueService) => {
    expect(service).toBeTruthy();
  }));
});
