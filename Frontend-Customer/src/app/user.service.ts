import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): string[] {
    return ['Alice', 'Bob', 'Charlie'];
  }
}

