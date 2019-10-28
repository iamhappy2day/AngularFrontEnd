import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UsersComponent } from '../users/users.component';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  targetUser: User = this.userService.selectedUser;
  form: FormGroup;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      nickname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }
  private backToUsers() {
    this.userService.backToUsers()
  }
   submitForm() {
    console.log(this.form.value)
    console.log(this.targetUser)
  }

}
