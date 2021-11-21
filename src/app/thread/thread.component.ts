import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumsService } from '../forums.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  threadID : any;
  thread: any;
  posts: any;
  newPost = "";
  user: any;

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) {
    this.user = LoginService.user;
    this.threadID = this.route.snapshot.paramMap.get('thread');
    this.forumsService.getThreadByID(this.threadID).subscribe((res:any) =>{
      this.thread = res[0];
    })
    this.forumsService.getPostsByThreadId(this.threadID).subscribe((res) => {
      this.posts = res;
    })
  }

  ngOnInit(): void {
  }

  createPost(){
    if(this.newPost != ""){
      this.forumsService.createPost(this.newPost, this.threadID);
    }
  }

}
