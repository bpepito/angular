import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { map } from 'rxjs';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => {
    //   console.log(data);
    //   this.userService.getTxn().subscribe((data) => console.log(data));
    // });

    // forkJoin([
    //   this.userService.getUsers1(),
    //   this.userService.getTxn(),
    // ]).subscribe((data) => console.log(data));

    // this.userService.getUsers().subscribe((data) => console.log(data));
    // this.userService.getBooks().subscribe((data) => console.log(data));
    
    // this.userService.subject.subscribe(data => console.log(data));
    // this.userService.subject.next(100);
    // this.userService.subject.next(5);

    // this.userService.behavior.subscribe(data => console.log(data));
    // this.userService.behavior.next('Heather');
    // this.userService.behavior.next('Jose');
    // this.userService.behavior.next('Mark');

    // this.userService.replay.next('order1');
    // this.userService.replay.next('order2');
    // this.userService.replay.next('order3');
    // this.userService.replay.next('order4');
    // this.userService.replay.next('order5');
    // this.userService.replay.subscribe(data => console.log(data));
    // this.userService.replay.next('order6');
  }

  createUser() {
    console.log('calling service createUer');
    this.userService
      .createUser({
        name: 'Roger',
        active: true,
        age: 25,
      })
      .subscribe((data) => console.log(data));
  }

  deleteUser = (id: string) => {
    this.userService.deleteUser(id).subscribe((data) => console.log(data));
  };

  updateUser = () => {
    let user: User = {
      id: 'f9d4',
      name: 'New Name',
      age: 20,
      active: true,
    };
    this.userService.updateUser(user).subscribe((data) => console.log(data));
  };
}
