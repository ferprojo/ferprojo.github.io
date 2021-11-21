import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static user:any;

  constructor(private afs: AngularFirestore) { 
    LoginService.user = null;
  }

  login(username:string, password: string):void{
    let user = this.afs.collection("Users", ref=>ref.where("Username", "==", username).where("password", "==", password))
    user.valueChanges().subscribe(res => {
      if(res.length > 0){
        LoginService.user = res[0];
      }
      
    })

  }

  createUser(username: String, password: String){

    this.afs.collection("Users").doc().set({
      Username: username,
      password: password
    })
  }

}
