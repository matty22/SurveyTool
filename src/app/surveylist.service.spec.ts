import { TestBed, inject } from '@angular/core/testing';

import { SurveylistService } from './surveylist.service';

describe('SurveylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveylistService]
    });
  });

  it('should be created', inject([SurveylistService], (service: SurveylistService) => {
    expect(service).toBeTruthy();
  }));
});
