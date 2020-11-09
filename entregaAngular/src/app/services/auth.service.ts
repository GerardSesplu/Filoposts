import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: FormGroup) {
    if(user.email === '' && user.password === '')
  }
}
