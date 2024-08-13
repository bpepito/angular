import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name: string = 'data from server';

  getDataFromServer = () => {
    return this.name;
  };
}
