import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLoggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Here you can add your login logic, for example, sending a request to a server
    if (username === 'myusername' && password === 'mypassword') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}