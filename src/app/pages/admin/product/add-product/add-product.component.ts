import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryProject } from 'src/app/models/CategoryProject';
import { IProject } from 'src/app/models/Product';
import { CategoryProjectService } from 'src/app/services/categoryProject.service';
import { ProjectService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories!: ICategoryProject[]
  project: IProject = {
    name: "",
    desc: "",
    img: "",
    link: "",
    tech: "",
    techSheet: "",
    descShort: "",
    cateProjectId: 0
  }
  nameForm: string = "Add product"
  constructor(
    private projectService: ProjectService,
    private categoryService: CategoryProjectService,
    private router: Router,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.nameForm = "Edit product"
      this.projectService.getProject(id).subscribe(data => {
        this.project = data
      })
    }
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data
    })

  }

  changeCate(e: any) {
    this.project.cateProjectId = e.target.value
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.updateProject(this.project).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/project');
        }, 2000)
      })
    } else{
      this.projectService.addProject(this.project).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/project');
        }, 2000)
      });
    }
    
  }

}
