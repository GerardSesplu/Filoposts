import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private userName: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: number;
  private password: string;
  private password2: string;

  private loginUserName: string;
  private loginPassword: string;

  register: FormGroup;
  enter: FormGroup;

  constructor(private user: FormBuilder ,private _servicio2: UsersService, private login: FormBuilder, private router: Router) {
    this.createForm();
    
   }


  ngOnInit(): void {
  }

  createForm(): void {

    this.register = this.user.group({

      userName: ['',[Validators.required, Validators.minLength(3)]],
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3)]],
      phoneNumber: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required, Validators.minLength(3)]],
      password2: ['',[Validators.required, Validators.minLength(3)]]
      
    })

    this.enter = this.login.group({

      loginUserName: ['',Validators.required],
      loginPassword: ['',Validators.required]

    })
  }

  saveForm(): void {

    this.userName = this.register.value.userName
    this.firstName = this.register.value.firstName
    this.lastName = this.register.value.lastName
    this.email = this.register.value.email
    this.phoneNumber = this.register.value.phoneNumber
    this.password = this.register.value.password
    this.password2 = this.register.value.password2

    if(this.password === this.password2){

      this._servicio2.newUser(this.userName, this.firstName, this.lastName, this.email, this.phoneNumber, this.password);

    } else {

        alert('las contraseñas no coinciden')
        
      }
    }

  checkUser(): void {

    this.loginUserName = this.enter.value.loginUserName
    this.loginPassword = this.enter.value.loginPassword

    const loginResult = this._servicio2.checkUser(this.loginUserName, this.loginPassword);

    if(loginResult){

      this.router.navigateByUrl('/');

    } else {
      
      alert('usuario o constraseña incorrectos');

    }
    
  }
}
