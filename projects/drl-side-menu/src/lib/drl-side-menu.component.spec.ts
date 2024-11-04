import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrlSideMenuComponent } from './drl-side-menu.component';

describe('DrlSideMenuComponent', () => {
  let component: DrlSideMenuComponent;
  let fixture: ComponentFixture<DrlSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrlSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrlSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
