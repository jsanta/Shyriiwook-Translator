import { TestBed } from '@angular/core/testing';

import { SpeechApiService } from './speech-api.service';

describe('SpeechApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechApiService = TestBed.get(SpeechApiService);
    expect(service).toBeTruthy();
  });
});
