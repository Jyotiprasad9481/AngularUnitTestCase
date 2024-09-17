import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AboutComponent } from "./about.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('AboutComponent', () => {
  let component : AboutComponent ;
  let fixture : ComponentFixture<AboutComponent>
  let debug : DebugElement ;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [AboutComponent]
    })
    fixture = TestBed.createComponent(AboutComponent)
    component = fixture.componentInstance ;
    fixture.detectChanges();
    // component = new AboutComponent ;
    debug = fixture.debugElement ;
  })
  it('Component created Successfully', () => {
    expect(component).toBeTruthy();
  })
  it('title should be match', () => {
    expect(component.title).toBe('About')
  })
  it('Button should be clicked' , () => {
    const h1 = debug.query(By.css('h1'));
    const btn = debug.query(By.css('#incrementButton'))
    btn.triggerEventHandler('click', {});
    fixture.detectChanges()
    expect(component.count).toEqual(parseInt(h1.nativeElement.innerText));
  })
  
})






