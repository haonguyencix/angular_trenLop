import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { BaiTapNgifComponent } from './bai-tap-ngif/bai-tap-ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, BaiTapNgifComponent, NgSwitchComponent, NgForComponent],
  exports: [StructuralDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class StructuralDirectiveModule { }
