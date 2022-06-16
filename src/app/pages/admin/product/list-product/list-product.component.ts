import { Component, OnInit } from '@angular/core';
import { ColumnItem, IProject } from 'src/app/models/Product';
import { ProjectService } from '../../../../services/product.service';
import { splitArray } from '../../../../../utils/splitTechImg';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  projects!: IProject[];
  constructor(private projectService: ProjectService) {
    this.getAllProduct()
  }

  ngOnInit(): void {
  }

  getAllProduct() {
    this.projectService.getProjectList().subscribe(data => {
      //convert to get item in each tech
      // const newTech = data.map(item => {
      //   return splitArray(item.tech)
      // })
      // const newTech2 = newTech[0]
      // const newData = data.map(item => {
      //   return {newTech2, ...item}
      // })

      // this.projects = newData
      this.projects = data
    })
  }

  onHandleRemove(id: string | number) {
    const confirm = window.confirm("Are you sure you want to remove this project?")
    if (confirm) {
      this.projectService.removeProject(id).subscribe(() => {
        this.projects = this.projects.filter(item => item.id !== id);
      })
    }
  }


  splitArray = (arr: string) => {
    return arr.split(", ")
  }

}
