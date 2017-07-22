import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fname:string = 'Parth';
  lname:string;

  constructor() { }

  ngOnInit() {

    this.fname = 'Parth Thakkar';

  }


}
