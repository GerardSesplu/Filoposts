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

  
  newUser(userName:string, firstName:string, lastName:string, email:string, phoneNumber:number, password:string){

    this.users.push(new User(userName, firstName, lastName, email, phoneNumber, password))

    console.log(this.users);
    
  }

  getUser(){

    return this.users;

  }


  checkUser(user:string, password:string){

    if((user === this.users[0].userName && password === this.users[0].password) || (user === this.users[1].userName && password === this.users[1].password)){

      console.log('el usuario es correcto')
      localStorage.setItem('auth', 'true')
      return true;
      
    } else {
      
      console.log('el usuario no es correcto')
      return false;
    }

  }

  isAuth(): boolean{

    if( localStorage.getItem('auth') === 'true'){
      return true;
    } else {
      return false;
    }
    
  }


}
