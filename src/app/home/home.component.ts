import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  guides: any = null;
  recentposts: any = null;

  constructor(private posts: PostsService) {
    this.posts.getRecentGuides().subscribe((res: any) => {this.guides = res;});
    this.posts.getRecentPosts().subscribe((res: any) => {this.recentposts = res;});
  }

  ngOnInit(): void {

  }

}
