import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PIA';

  public static user: any = null;
  loggedIn = false;

  constructor(private login: LoginService, private router: Router){
    AppComponent.user = LoginService.user;
    
  }

  userButton():void{
    if(LoginService.user == null){this.router.navigate(['/Login'])}else{}
  }

  getUsername(){
    return AppComponent.user.Username;
  }

  getUser(){
    return LoginService.user;
  }

  logOut(){
    LoginService.user = null;
    this.router.navigate(["/"])
  }
}
