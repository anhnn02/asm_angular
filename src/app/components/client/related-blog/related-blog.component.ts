import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-related-blog',
  templateUrl: './related-blog.component.html',
  styleUrls: ['./related-blog.component.css']
})
export class RelatedBlogComponent implements OnInit {
  blogRealted!: {}[]
  constructor(
    private BlogService: BlogService
  ) { }

  ngOnInit(): void {
  }

  

}
