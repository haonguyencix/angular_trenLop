import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  textColor: boolean = true;
  textFont: boolean = true;

  bgColor: string = "purple";
  colorText: string = "white";

  name: string = "Hảo";
  constructor() { }

  ngOnInit() {
  }

}
