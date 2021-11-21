import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from '@firebase/firestore';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  constructor(private afs: AngularFirestore) { }

  getForums(): any{
    let forums = this.afs.collection("Forums");
    return forums.valueChanges({idField: "ID"});
  }

  getThreadsByForum(forumName: string){
    let threads = this.afs.collection("Threads", ref=>ref.where("ForumName", "==", forumName));
    return threads.valueChanges({idField: "ID"});
  }

  getThreadByID(threadID: string){
    let thread = this.afs.collection("Threads", ref=>ref.where(documentId(), "==", threadID));
    return thread.valueChanges({idField: "ID"});
  }

  getPostsByThreadId(threadID: string){
    let posts = this.afs.collection("ForumPosts", ref=>ref.where("ThreadID", "==", threadID));
    return posts.valueChanges({idField: "ID"});
  }

  createPost(message: String, threadID: string){

    this.afs.collection("ForumPosts").doc().set({
      Content: message,
      Author: LoginService.user.Username,
      ThreadID: threadID
    })
  }

}
