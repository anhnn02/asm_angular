import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs!: IBlog[];
  constructor(private blogService: BlogService) {
    this.getAllProduct()
  }

  ngOnInit(): void {
  }
  getAllProduct() {
    this.blogService.getBlogList().subscribe(data => {
      this.blogs = data
    })
  }

}
