import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettifyNamePipe } from './pipes/prettify-name.pipe';



@NgModule({
  declarations: [
    PrettifyNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrettifyNamePipe
  ]
})
export class SharedModule { }
