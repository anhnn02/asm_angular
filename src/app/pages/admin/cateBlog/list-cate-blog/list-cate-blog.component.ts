import { Component, OnInit } from '@angular/core';
import { ICategoryBlog } from 'src/app/models/CategoryBlog';
import { CategoryBlogService } from 'src/app/services/categoryBlog.service';

@Component({
  selector: 'app-list-cate-blog',
  templateUrl: './list-cate-blog.component.html',
  styleUrls: ['./list-cate-blog.component.css']
})
export class ListCateBlogComponent implements OnInit {
  categories!: ICategoryBlog[];
  constructor(private cateBlogService: CategoryBlogService) {
    this.getAllProduct()
  }

  ngOnInit(): void {
  }

  getAllProduct() {
    this.cateBlogService.getCategoryList().subscribe(data => {
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
      this.cateBlogService.removeCategory(id).subscribe(() => {
        this.categories = this.categories.filter(item => item.id !== id);
      })
    }
  }


  splitArray = (arr: string) => {
    return arr.split(", ")
  }

}
