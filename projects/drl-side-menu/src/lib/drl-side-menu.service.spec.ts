import { TestBed } from '@angular/core/testing';

import { DrlSideMenuService } from './drl-side-menu.service';

describe('DrlSideMenuService', () => {
  let service: DrlSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrlSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
