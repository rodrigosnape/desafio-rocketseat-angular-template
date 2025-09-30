import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  getUserToken() {

    //return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibm92b0BleGFtcGxlLmNvbSIsImlhdCI6MTc1OTI2NjgyMiwiZXhwIjoxNzU5MzUzMjIyfQ.3XznRcsDqjClYhu7pZPvbVfhsHvoaWqJvyeUhz7HPUk';
    return localStorage.getItem('auth-token') || '';
  }

  setUserToken(token: string) {
    localStorage.setItem('auth-token', token);
  }
}
