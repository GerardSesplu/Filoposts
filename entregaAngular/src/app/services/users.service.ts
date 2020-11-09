import { Injectable } from '@angular/core';
import { User } from './../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any[] = [];
  
  constructor() { 

    this.users.push( new User('admin','gerard', 'Sesplu', 'gerses@gmail.com', 666666666, 'admin'));  
    
    console.log(this.users);
    
  }
  
  

  newUser(a, b, c, d, e, f){
    this.users.push(new User(a, b, c, d, e, f))
  }

}
