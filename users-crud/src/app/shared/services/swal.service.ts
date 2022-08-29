import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor() {}

  success(title: string, msg: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: msg,
    });
  }

  error(title: string, msg: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: msg,
    });
  }

  warning(title: string, msg: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: msg,
    });
  }
}
