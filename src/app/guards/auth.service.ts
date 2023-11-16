import { Injectable } from '@angular/core';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validateRol(): boolean {
    const rol = Utils.getRole().toLowerCase()

    if (rol || rol !== '') {
      return true
    }
    return false
  }
}
