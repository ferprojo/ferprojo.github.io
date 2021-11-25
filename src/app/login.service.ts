import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static user:any = null;
  public static userObservable: any = null;

  constructor(private afs: AngularFirestore, private router: Router) { 
    LoginService.user = null;
  }

  login(username:string, password: string):boolean{
    let user = this.afs.collection("Users", ref=>ref.where("Username", "==", username).where("password", "==", password))
    LoginService.userObservable = user.valueChanges();
    user.valueChanges().subscribe(res => {
      if(res.length > 0){
        LoginService.user = res[0];
        AppComponent.user = res[0];
        this.router.navigate(["/"])
        LoginComponent.incorrectPassword = false;
        return true;
      }else{
        LoginComponent.incorrectPassword = true;
        return false;
      }
      
    })

    return false;
  }

  createUser(username: String, password: String): boolean{
    
    let user = this.afs.collection("Users", ref=>ref.where("Username", "==", username))

    user.valueChanges().subscribe(res => {
      if(res.length > 0){
        LoginComponent.userAlreadyExists = true;
        return true;
      }else{
        this.afs.collection("Users").doc().set({
          Username: username,
          password: password
        })
        LoginComponent.userAlreadyExists = false;
        LoginComponent.creatingUser = false;
        LoginComponent.userWasCreated = true;
        return false;
      }
      
    })

    return true;

    
  }

}
