import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent implements OnInit {

  targetUser: User = this.userService.selectedUser;
  showForm: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  
  private toggleUserForm() {
    this.showForm = !this.showForm
  }
  private backToUsers() {
    this.userService.backToUsers()
  }
  private deleteUser() {
    this.userService.deleteUser(this.targetUser)
  }
  private showUserRaces() {
    this.userService.showUserRaces(this.targetUser._id)
  }

}
