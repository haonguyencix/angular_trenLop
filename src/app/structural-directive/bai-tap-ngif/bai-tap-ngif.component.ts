import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-ngif',
  templateUrl: './bai-tap-ngif.component.html',
  styleUrls: ['./bai-tap-ngif.component.scss']
})
export class BaiTapNgifComponent implements OnInit {
  statusLogin: boolean = false;
  name: string = "";
  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    if (localStorage.getItem("userLogin") !== null) {
      this.statusLogin = true;
      this.name = JSON.parse(localStorage.getItem("userLogin"));
    }
  }

  login(userName, password) {
    if (userName === "Cybersoft" && password === "Cybersoft") {
      this.statusLogin = true;
      this.name = userName;

      localStorage.setItem("userLogin", JSON.stringify(userName));
    }
  }


}

