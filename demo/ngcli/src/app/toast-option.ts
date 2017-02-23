import {ToastOptions} from 'ng2-toastr';
import {Injectable} from '@angular/core';

@Injectable()
export class ToastOption extends ToastOptions {
  constructor() {
    super({
      animate: 'flyRight',
      newestOnTop: false,
      showCloseButton: true,
    });
  }
}

