import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  guide: any;
  constructor(private posts: PostsService, private route: ActivatedRoute) {
    this.guide = this.route.snapshot.paramMap.get('guide');
    this.posts.getGuideByID(this.guide).subscribe(res => {this.guide = res[0];})
   }

  ngOnInit(): void {
    
  }

}
