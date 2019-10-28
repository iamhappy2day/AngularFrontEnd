import { Injectable } from '@angular/core';
import { User } from './user'; 
import { USERS } from './users-mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User

  constructor(private router: Router) { }

  public getUsers(): User[] {
    return USERS;
  }

  public getUser(user: User): void {
    this.router.navigate(['users', user._id])
    this.selectedUser = user
  }

  public backToUsers(): void {
    this.router.navigate(['users'])
  }

  public goToAddUserPage(): void {
    this.router.navigate(['users/add'])
  }

  public submitForm(): void {
    console.log('service on touch!')
  }
}

