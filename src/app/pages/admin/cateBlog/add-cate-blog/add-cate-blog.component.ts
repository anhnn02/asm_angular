import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryBlog } from 'src/app/models/CategoryBlog';
import { CategoryBlogService } from 'src/app/services/categoryBlog.service';

@Component({
  selector: 'app-add-cate-blog',
  templateUrl: './add-cate-blog.component.html',
  styleUrls: ['./add-cate-blog.component.css']
})
export class AddCateBlogComponent implements OnInit {
  category: ICategoryBlog = {
    name: "",
  }
  nameForm: string = "Add category blog"
  constructor(
    private categoryService: CategoryBlogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.nameForm = "Edit category blog"
      this.categoryService.getCategory(id).subscribe(data => {
        this.category = data
      })
    }
  }
  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.categoryService.updateCategory(this.category).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/category-blog');
        }, 2000)
      })
    } else {
      this.categoryService.addCategory(this.category).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/category-blog');
        }, 2000)
      });
    }

  }

}
