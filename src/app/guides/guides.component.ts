import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  categories: any;

  constructor(private posts: PostsService, private router: Router) { 
    this.posts.getCategories().subscribe((res : any) => {
      this.categories = res;
      console.log(res)
    });
  }

  ngOnInit(): void {
  }

  openCategory(cat: String){
    this.router.navigate(["Category", { category: cat }])
  }

}
