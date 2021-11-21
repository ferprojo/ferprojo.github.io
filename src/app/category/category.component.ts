import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  category: any;
  guides: any;

  constructor(private route: ActivatedRoute, private posts: PostsService, private router: Router) { 
    this.category = this.route.snapshot.paramMap.get('category');
    this.posts.getGuidesByCategory(this.category).subscribe((res:any) =>{
      this.guides = res;
    })
  }

  ngOnInit(): void {
  }

  openGuide(guideID: string){
    this.router.navigate(["Guide", { guide: guideID }])
  }

}
