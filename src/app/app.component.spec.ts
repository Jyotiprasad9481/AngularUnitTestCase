import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'AngularUnitTestApp'`, () => {
    expect(component.title).toEqual('AngularUnitTest');
  });

  // it('should render title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'AngularUnitTest app is running!'
  //   );
  // });
  it('my test case', () => {
    expect(true).toBe(2 == 2);
  });
  it('Message should be string', () => {
    expect(component.showMessage('Hello')).toBe('Hello');
  });
    
});