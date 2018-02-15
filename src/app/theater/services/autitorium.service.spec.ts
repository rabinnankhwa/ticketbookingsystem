import { TestBed, inject } from '@angular/core/testing';

import { AutitoriumService } from './autitorium.service';

describe('AutitoriumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutitoriumService]
    });
  });

  it('should be created', inject([AutitoriumService], (service: AutitoriumService) => {
    expect(service).toBeTruthy();
  }));
});
