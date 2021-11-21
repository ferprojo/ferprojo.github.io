import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { documentId } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  getRecentGuides(): any{
    let guides = this.afs.collection("Guides", ref=>ref.orderBy("PublishDate", 'desc').limit(5));
    return guides.valueChanges({idField: "ID"});
  }

  getRecentPosts(): any{
    let posts = this.afs.collection("Posts", ref=>ref.orderBy("PublishDate", 'desc'));
    return posts.valueChanges({idField: "ID"});
  }

  getCategories(): any{
    let categories = this.afs.collection("GuidesCategories");
    return categories.valueChanges({idField: "ID"});
  }

  getGuidesByCategory(category: string): any{
    let guides = this.afs.collection("Guides", ref=>ref.where("CategoryName", '==', category));
    return guides.valueChanges({idField: "ID"});
  }

  getGuideByID(id: string){
    let guide = this.afs.collection("Guides", ref=>ref.where(documentId(), '==', id).limit(1));
    return guide.valueChanges({idField: "ID"});
  }
}
