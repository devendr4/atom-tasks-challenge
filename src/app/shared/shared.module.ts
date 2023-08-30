import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [CardComponent, ButtonComponent, IconBtnComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [CardComponent, ButtonComponent, IconBtnComponent],
})
export class SharedModule {}
