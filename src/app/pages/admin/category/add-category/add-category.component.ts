import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryProject } from 'src/app/models/CategoryProject';
import { CategoryProjectService } from 'src/app/services/categoryProject.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: ICategoryProject = {
    name: "",
  }
  nameForm: string = "Add product"
  constructor(
    private categoryService: CategoryProjectService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.nameForm = "Edit product"
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
          this.router.navigateByUrl('/admin/category');
        }, 2000)
      })
    } else {
      this.categoryService.addCategory(this.category).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/category');
        }, 2000)
      });
    }

  }


}
