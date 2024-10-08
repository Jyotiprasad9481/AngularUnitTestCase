import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private service: UsersService) {}

  ngOnInit() {
    this.service.getData().subscribe((res) => {
      this.data = res;
    });
  }
}
