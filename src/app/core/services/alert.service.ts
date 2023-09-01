import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isOpen = false;
  msg = '';
  type: 'primary' | 'secondary' | 'success' | 'danger';

  setOpen(
    msg: string,
    type: 'primary' | 'secondary' | 'success' | 'danger' = 'primary'
  ) {
    this.isOpen = true;
    this.msg = msg;
    this.type = type;
    setTimeout(() => {
      this.isOpen = false;
      //stays open for 5 seconds
    }, 5000);
  }
}
