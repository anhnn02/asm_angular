import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/Product';
import { ProjectService } from 'src/app/services/product.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project!: IProject 
  proRelated!: any
  idCatePro!: number | string
  constructor(private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute) {
      this.getProject()
     }

  ngOnInit(): void {
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if(id) {
      this.projectService.getProject(id).subscribe(data => {
        this.project = data
        this.idCatePro! = data.cateProjectId!
        this.getAllRelatedPro(this.idCatePro)
      })
    }
  }

  getAllRelatedPro(idCatePro: string | number) {
    this.projectService.getRelatedProject(idCatePro).subscribe(data => {
      this.proRelated = data
      console.log(data);

    })
  }
  splitArray = (arr: string) => {
    return arr.split(", ")
  }
}
