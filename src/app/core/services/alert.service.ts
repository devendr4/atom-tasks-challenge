import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isOpen = false;
  msg = '';

  setOpen(msg: string) {
    this.isOpen = true;
    this.msg = msg;
    setTimeout(() => {
      this.isOpen = false;
      //stays open for 5 seconds
    }, 5000);
  }
}
