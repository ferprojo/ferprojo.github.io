import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PIA';

  constructor(private login: LoginService, private router: Router){}

  userButton():void{
    if(LoginService.user == null){this.router.navigate(['/Login'])}else{}
    console.log("a")
  }
}
