import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blogs!: IBlog[];
  constructor(private blogService: BlogService) {
    this.getAllBlog()
  }

  ngOnInit(): void {
  }

  getAllBlog() {
    this.blogService.getBlogList().subscribe(data => {
      console.log(data)
      this.blogs = data
    })
  }

  onHandleRemove(id: string | number) {
    const confirm = window.confirm("Are you sure you want to remove this blog?")
    if (confirm) {
      this.blogService.removeBlog(id).subscribe(() => {
        this.blogs = this.blogs.filter(item => item.id !== id);
      })
    }
  }

}
