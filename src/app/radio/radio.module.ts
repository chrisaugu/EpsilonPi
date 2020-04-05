import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadioComponent} from "./radio.component";
import {RadioRoutingModule} from "./radio.routes";

@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    RadioRoutingModule
  ]
})
export class RadioModule { }
