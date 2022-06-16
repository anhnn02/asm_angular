import { Component, OnInit } from '@angular/core';
import { ICategoryProject } from 'src/app/models/CategoryProject';
import { CategoryProjectService } from 'src/app/services/categoryProject.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories!: ICategoryProject[];
  constructor(private projectService: CategoryProjectService) {
    this.getAllProduct()
  }

  ngOnInit(): void {
  }

  getAllProduct() {
    this.projectService.getCategoryList().subscribe(data => {
      //convert to get item in each tech
      // const newTech = data.map(item => {
      //   return splitArray(item.tech)
      // })
      // const newTech2 = newTech[0]
      // const newData = data.map(item => {
      //   return {newTech2, ...item}
      // })

      // this.projects = newData
      this.categories = data
    })
  }

  onHandleRemove(id: string | number) {
    const confirm = window.confirm("Are you sure you want to remove this category?")
    if (confirm) {
      this.projectService.removeCategory(id).subscribe(() => {
        this.categories = this.categories.filter(item => item.id !== id);
      })
    }
  }


  splitArray = (arr: string) => {
    return arr.split(", ")
  }

}
