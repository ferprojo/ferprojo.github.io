import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatroomsService } from '../chatrooms.service';
import { interval } from 'rxjs';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-chatrooms',
  templateUrl: './chatrooms.component.html',
  styleUrls: ['./chatrooms.component.scss']
})
export class ChatroomsComponent implements OnInit, OnDestroy {

  messages: any;
  sub: any;
  user: any = null;
  newMessage = "";

  constructor(private chatroomService: ChatroomsService, private loginService: LoginService) {  
    this.user = LoginService.user;
    console.log(this.user)
    
    this.chatroomService.getRecentMessages().subscribe((res) => {
      this.messages = res;
    });
    this.sub = interval(10000).subscribe((val) => {
      let date = new Date(this.messages[this.messages.length - 1].Date.toDate());
      console.log(date)
      console.log(this.messages[this.messages.length - 1].Date.toDate())
      console.log(this.messages[this.messages.length - 1].Message)
      this.chatroomService.updateMessages(date).subscribe((res)=>{
        if(res != null && res.length > 0){
          this.messages = this.messages.concat(res)
        }
      }) 
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  sendMessage(): void{
    if(this.newMessage != ""){
      this.chatroomService.sendMessage(this.newMessage);
      this.newMessage = "";
    }
    
  }

}
