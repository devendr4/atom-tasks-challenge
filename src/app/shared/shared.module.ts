import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    IconBtnComponent,
    ModalComponent,
  ],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [CardComponent, ButtonComponent, IconBtnComponent, ModalComponent],
})
export class SharedModule {}
