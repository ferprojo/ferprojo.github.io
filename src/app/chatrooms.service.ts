import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ChatroomsService {

  constructor(private afs: AngularFirestore) { }
  
  getRecentMessages(){
    let messages = this.afs.collection("Chatroom", ref=>ref.orderBy("Date", 'asc'));
    return messages.valueChanges({idField: "ID"});
  }

  updateMessages(date: any){
    let messages = this.afs.collection("Chatroom", ref=>ref.where("Date", '>', date));
    return messages.valueChanges({idField: "ID"});
  }

  sendMessage(message: String){

    this.afs.collection("Chatroom").doc().set({
      Message: message,
      Author: LoginService.user.Username,
      Date: new Date()
    })
  }

}
