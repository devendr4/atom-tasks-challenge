import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isOpen = false;
  msg = '';

  constructor() {}

  setOpen(msg: string) {
    this.isOpen = true;
    this.msg = msg;
  }
}
