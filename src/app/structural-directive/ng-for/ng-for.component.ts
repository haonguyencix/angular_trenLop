import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  public DSNV: any = [
    { ten: "Hảo", tuoi: "21" },
    { ten: "Mẫn", tuoi: "22" },
    { ten: "Hiếu", tuoi: "23" },
    { ten: "Nguyên", tuoi: "24" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
