import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Product';
import { ProjectService } from 'src/app/services/product.service';
import { splitArray } from 'src/utils/splitTechImg';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects!: IProject[];
  constructor(private projectService: ProjectService) {
    this.getAllProduct()
   }

  ngOnInit(): void {
  }
  getAllProduct() {
    this.projectService.getProjectList().subscribe(data => {
      const newTech = data.map(item => {
        return splitArray(item.tech)
      })
      const newTech2 = newTech[0]
      const newData = data.map(item => {
        return { newTech2, ...item }
      })

      this.projects = newData
    })
  }
  splitArray = (arr: string) => {
    return arr.split(", ")
  }

}
