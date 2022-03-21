import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private db: BdServiceService) { }

  ngOnInit(): void {
    this.db.getPostsUsuario().subscribe((res: any) =>{
      this.posts = res;
    })
  }

  posts: any = [];
}
