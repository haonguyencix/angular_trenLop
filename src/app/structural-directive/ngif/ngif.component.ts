import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  // true: hiện lên, false: ẩn
  status: boolean = true;
  statusLogin: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  hidden() {
    this.status = false;
  }

  show() {
    this.status = true;
  }

  logOut() {
    this.statusLogin = false;
  }

  logIn() {
    this.statusLogin = true;
  }
}
