import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, ReplaySubject, Subject, tap } from 'rxjs';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:3000';
  subject = new Subject();
  behavior = new BehaviorSubject('John');
  replay = new ReplaySubject(3);

  constructor(private http: HttpClient) {}

  getUsers1 = () => {
    return of(['Jane', 'Mike', 'Jose']).pipe(
      map((x) => {
        let va = 'update';
        for (let data in x) {
          x[data] = 'update' + x[data];
        }
        return x;
      })
    );
  };

  getTxn = () => {
    return of('Test');
  };

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.serverUrl}/users`).pipe(
      map((x: any) => {
        return x.filter((data: User) => data.active);
      })
    );
  }

  getBooks() {
    return this.http.get(`${this.serverUrl}/books`).pipe(tap((x) => x));
  }

  createUser(user: User) {
    return this.http
      .post(`${this.serverUrl}/users`, user)
      .pipe(tap((x) => console.log('creating', x)));
  }

  updateUser(user: User) {
    return this.http
      .put(`${this.serverUrl}/users/${user.id}`, user)
      .pipe(tap((x) => console.log('creating', x)));
  }

  deleteUser(id: any) {
    console.log('deleting id:' + id);
    return this.http
      .delete(`${this.serverUrl}/users/${id}`)
      .pipe(tap((x) => console.log('after delete: ', x)));
  }
}
