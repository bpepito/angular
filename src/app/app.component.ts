import { Component } from '@angular/core';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular';
  showBlog = true;

  constructor(private userService: UserService) {
    console.log(userService.getDataFromServer());
  }

  toggleShowBlog() {
    this.showBlog = !this.showBlog;
  }
  payment = 1234;
  title = 'angular-forms';
}
