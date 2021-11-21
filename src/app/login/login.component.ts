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
  creatingUser = false;

  constructor(private afs: AngularFirestore, private loginService: LoginService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.username, this.password);
    if(LoginService.user != null){
      this.router.navigate(["/"])
    }
  }

  createUser(){
    this.loginService.createUser(this.newUser, this.newPassword);
    this.loginService.login(this.newUser, this.newPassword);

    if(LoginService.user != null){
      this.router.navigate(["/"])
    }
  }
  
}
