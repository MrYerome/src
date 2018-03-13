import { TestBed, inject } from '@angular/core/testing';

import { DisquesService } from './disques.service';

describe('DisquesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisquesService]
    });
  });

  it('should be created', inject([DisquesService], (service: DisquesService) => {
    expect(service).toBeTruthy();
  }));
});
