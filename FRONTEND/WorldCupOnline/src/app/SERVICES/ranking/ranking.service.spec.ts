import { TestBed } from '@angular/core/testing';

import { RankingService } from './ranking.service';
import { HttpClientModule } from '@angular/common/http';
describe('RankingService', () => {
  let service: RankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[RankingService]
    });
    service = TestBed.inject(RankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
