import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-them-san-pham',
  templateUrl: './bai-tap-them-san-pham.component.html',
  styleUrls: ['./bai-tap-them-san-pham.component.scss']
})
export class BaiTapThemSanPhamComponent implements OnInit {
  ma: string = "";
  ten: string = "";
  gia: string = "";
  public DSSP: any = [];

  constructor() { }

  ngOnInit() {
  }

  themSP(maSP, tenSP, giaSP){
    const objSP = {
      ma: maSP,
      ten: tenSP,
      gia: giaSP
    }
    this.DSSP.push(objSP);
  }
  

}
