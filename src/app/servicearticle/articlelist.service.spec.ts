import { TestBed, inject } from '@angular/core/testing';

import { ArticlelistService } from './articlelist.service';

describe('ArticlelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlelistService]
    });
  });

  it('should be created', inject([ArticlelistService], (service: ArticlelistService) => {
    expect(service).toBeTruthy();
  }));
});
