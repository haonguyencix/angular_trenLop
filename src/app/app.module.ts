import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2MenuComponent } from './baitap2/baitap2-menu/baitap2-menu.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2ContentComponent } from './baitap2/baitap2-content/baitap2-content.component';
import { Baitap2ListCardComponent } from './baitap2/baitap2-list-card/baitap2-list-card.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { Baitap2WhatWeDoComponent } from './baitap2/baitap2-content/baitap2-what-we-do/baitap2-what-we-do.component';
import { Baitap2ContactComponent } from './baitap2/baitap2-content/baitap2-contact/baitap2-contact.component';
import { Baitap2ItemCardComponent } from './baitap2/baitap2-list-card/baitap2-item-card/baitap2-item-card.component';

import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2MenuComponent,
    Baitap2CarouselComponent,
    Baitap2ContentComponent,
    Baitap2ListCardComponent,
    Baitap2FooterComponent,
    Baitap2WhatWeDoComponent,
    Baitap2ContactComponent,
    Baitap2ItemCardComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
