import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrlSideMenuComponent } from './drl-side-menu.component';
import { provideRouter } from '@angular/router';

describe('DrlSideMenuComponent', () => {
  let component: DrlSideMenuComponent;
  let fixture: ComponentFixture<DrlSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrlSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrlSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when logout button is clicked', () => {
    spyOn(component.onSignIn, 'emit')
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges()

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click()

    expect(component.onSignIn.emit).toHaveBeenCalled()
  });
  it('should call onSignOut when logout button is clicked', () => {
    spyOn(component.onSignOut, 'emit')
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges()

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    button.click()

    expect(component.onSignOut.emit).toHaveBeenCalled()
  });

});
