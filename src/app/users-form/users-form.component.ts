import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
 
  form: FormGroup;
  url: string = this.router.url
  @Input() showMePartially: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
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
      if(this.url == '/users/add') {
        this.userService.addUser(this.form.value)
      } else {
        this.userService.updateUser(this.form.value)
      }
  }
}
