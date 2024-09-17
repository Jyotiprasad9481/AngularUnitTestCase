import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactusComponent } from './contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../service/users.service';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let service : UsersService ;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, CommonModule,],
      providers: [UsersService],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UsersService);
  });

  it('Component should created', () => {
    expect(component).toBeTruthy();
  });
  it('Title should match', () => {
    
    expect(component.title).toBe('contact us');
  });
  it('should call getStudentData API in contactus component', () => {
    spyOn(service, 'getStudentData').and.returnValues(of([]))
    component.ngOnInit();
    expect(service.getStudentData).toHaveBeenCalled();
  })
});
