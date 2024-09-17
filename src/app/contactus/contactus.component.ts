import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  title: string = 'contact us';
  data: any[] = [];
  constructor(private service: UsersService) {}

  ngOnInit() {
    this.service.getStudentData().subscribe(
      (res) => {
        console.log(res);
        this.data = res;
      },
      (err) => {
        console.log('Error Fetching Student Data', err);
      }
    );
  }
}
