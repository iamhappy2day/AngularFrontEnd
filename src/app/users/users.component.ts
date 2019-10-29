import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[];
  public selectedUser: User;
 
  constructor(private userService: UserService) { }

  private getUsers(): void {
    this.users = this.userService.getUsers()
  }

  public onSelect(user: User): void {
    this.selectedUser = user;
  }
  
  private getUser(): void {
    this.userService.getUser(this.selectedUser)
  }
  private goToAddUserPage(): void {
    this.userService.goToAddUserPage()
  }
  ngOnInit() {
    this.getUsers();
  }

}
