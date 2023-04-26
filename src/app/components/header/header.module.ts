import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {ImageComponent} from "../image/image.component";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ImageComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
