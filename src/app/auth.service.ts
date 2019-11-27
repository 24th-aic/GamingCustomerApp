import { Injectable } from '@angular/core';
import { Users } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

returnUrl: string;private router:Router
  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  this.returnUrl = '/login';
  } 
}
