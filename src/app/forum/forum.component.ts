import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumsService } from '../forums.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forum: any;
  threads: any;

  constructor(private route: ActivatedRoute, private forumsService: ForumsService, private router: Router) {
    this.forum = this.route.snapshot.paramMap.get('forum');
    this.forumsService.getThreadsByForum(this.forum).subscribe((res:any) =>{
      this.threads = res;
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

  openThread(id: string){
    this.router.navigate(["Thread", {thread: id}])
  }

}
