import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumsService } from '../forums.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

  forums: any = null;

  constructor(private forumsService: ForumsService, private router: Router) { 
    this.forumsService.getForums().subscribe((res: any) => {
      this.forums = res;
    })
  }

  ngOnInit(): void {
  }

  openForum(forumName: string){
    this.router.navigate(["Forum", { forum: forumName }])
  }

}
