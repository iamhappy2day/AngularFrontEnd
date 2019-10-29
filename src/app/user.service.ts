import { Injectable } from '@angular/core';
import { User } from './user'; 
import { USERS } from './users-mock';
import { Router } from '@angular/router';
import { RACES } from './races-mock';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  newUser: User
  selectedUser: User
  updatedUser: User

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

  public addUser(formData):void {
    this.newUser = {...formData}
    USERS.push(this.newUser)
    console.log(USERS)
    console.log(this.newUser)
  }

  public updateUser(formData) {
    const index = USERS.indexOf(this.selectedUser)
    this.selectedUser = {...this.selectedUser, ...formData}
    USERS[index] = { ...USERS[index], ...this.selectedUser }
  }

  public deleteUser(user) {
    const index = USERS.indexOf(this.selectedUser)
    USERS.splice(index,1)
  }

  public showUserRaces(id) {
    const userRaces = RACES.filter(race => race.user == id)
    console.log(userRaces)
  }

}

