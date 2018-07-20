import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { Trim } from './pipes/trim.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuTopComponent, Trim],
  exports: [MenuTopComponent]
})
export class MenuModule {}
