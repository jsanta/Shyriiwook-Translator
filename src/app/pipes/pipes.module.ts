import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShyriiwookPipe } from './shyriiwook.pipe';

@NgModule({
  declarations: [
    ShyriiwookPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShyriiwookPipe
  ]
})
export class PipesModule { }
