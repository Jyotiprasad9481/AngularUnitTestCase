import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should fetch posts successfully', () => {
    const mockPost = [{}];
    service.getData().subscribe((data) => {
      expect(data).toEqual(mockPost);
    });
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPost);
  });
  it('Should fetch student successfully', () => {
    const mockPost = [{}];
    service.getStudentData().subscribe((data) => {
      expect(data).toEqual(mockPost);
    });
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockPost);
  });
});
