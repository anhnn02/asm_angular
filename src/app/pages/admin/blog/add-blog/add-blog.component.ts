import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/models/Blog';
import { ICategoryBlog } from 'src/app/models/CategoryBlog';
import { BlogService } from 'src/app/services/blog.service';
import { CategoryBlogService } from 'src/app/services/categoryBlog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  categories!: ICategoryBlog[]
  blog: IBlog = {
    name: "",
    img: "",
    imgSub: "",
    descShort: "",
    desc: "",
    cateBlogId: 0,
  }
  nameForm: string = "Add blog"
  constructor(
    private blogService: BlogService,
    private categoryService: CategoryBlogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.nameForm = "Edit blog"
      this.blogService.getBlog(id).subscribe(data => {
        this.blog = data
      })
    }
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data
    })

  }

  changeCate(e: any) {
    this.blog.cateBlogId = e.target.value
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogService.updateBlog(this.blog).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/blog');
        }, 2000)
      })
    } else {
      this.blogService.addBlog(this.blog).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/blog');
        }, 2000)
      });
    }

  }

}
