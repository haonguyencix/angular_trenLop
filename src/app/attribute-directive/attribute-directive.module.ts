import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BaiTapThemSanPhamComponent } from './bai-tap-them-san-pham/bai-tap-them-san-pham.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, BaiTapThemSanPhamComponent, HighLightDirective],
  exports: [AttributeDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectiveModule { }
