import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UsersService } from '../service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
      providers: [UsersService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UsersService);
  });

  // it('Addition of two number' , () => {
  //   expect(component.Addition(20, 30)).toBe(50);
  // })
  // it('Should return Array Value', () => {
  //   expect(component.array).toEqual([]);
  // })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('To be define', () => {
    let a;
    expect(a).toBeUndefined();
  });
  it('should call getData API in Home component', () => {
    spyOn(service, 'getData').and.returnValue(of([]));
    fixture.detectChanges();
    // component.ngOnInit();
    expect(service.getData).toHaveBeenCalled();
  });
});
