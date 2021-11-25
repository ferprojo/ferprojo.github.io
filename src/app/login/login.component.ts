import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  newUser = "";
  newPassword = "";
  public static creatingUser = false;
  public static userWasCreated = false;
  public static incorrectPassword = false;
  public static userAlreadyExists = false;
  invalidUserOrPassword = false;


  constructor(private afs: AngularFirestore, private loginService: LoginService, private router: Router) { 
    LoginComponent.creatingUser = false;
    LoginComponent.userWasCreated = false;
    LoginComponent.incorrectPassword = false;
    LoginComponent.userAlreadyExists = false;
    this.invalidUserOrPassword = false;

  }

  ngOnInit(): void {
  }

  login(){
    LoginComponent.userWasCreated = false;
    this.loginService.login(this.username, this.password);
  }

  createUser(){
    LoginComponent.userAlreadyExists = false;
    if(this.isEmptyOrSpaces(this.newUser) || this.isEmptyOrSpaces(this.newPassword)){
      this.invalidUserOrPassword = true;
    }else{
      this.loginService.createUser(this.newUser, this.newPassword);
      this.invalidUserOrPassword = false;
    }
    //this.loginService.login(this.newUser, this.newPassword);
  }

  isPasswordIncorrect(): boolean{
    return LoginComponent.incorrectPassword;
  }

  didUserExist(): boolean{
    return LoginComponent.userAlreadyExists;
  }

  creatingUser(): boolean{
    return LoginComponent.creatingUser;
  }

  userWasCreated(): boolean{
    return LoginComponent.userWasCreated;
  }

  setCreatingUser(t: boolean): void{
    this.invalidUserOrPassword = false;
    LoginComponent.creatingUser = t;
    LoginComponent.incorrectPassword = false;
  }

  isEmptyOrSpaces(str: string): boolean{
    return str === null || str.match(/^ *$/) !== null || str.indexOf(' ') >= 0;
  }
  
}
