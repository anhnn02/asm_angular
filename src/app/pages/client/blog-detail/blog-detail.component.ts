import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog!: IBlog
  blogRealted!: any
  idCateBlog!: number | string
  constructor(private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute) {
    this.getProject()
    
  }

  ngOnInit(): void {
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogService.getBlog(id).subscribe(data => {
        this.blog = data
        this.idCateBlog! = data.cateBlogId!
        this.getAllRelatedBlog(this.idCateBlog)
      })
    }
  }

  getAllRelatedBlog(idCateBlog: string | number) {
    this.blogService.getRelatedBlog(idCateBlog).subscribe(data=>{
      this.blogRealted = data
      console.log(data);
      
    })
  }

}
