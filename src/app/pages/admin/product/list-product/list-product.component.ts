import { Component, OnInit } from '@angular/core';
import { ColumnItem, IProduct } from 'src/app/models/Product';
import { ProductService } from '../../../../services/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  projects!: IProduct[];
  constructor(private projectService: ProductService) {
    this.getAllProduct()
  }

  ngOnInit(): void {
  }

  getAllProduct() {
    this.projectService.getProjectList().subscribe(data => {
      this.projects = data
    })
  }

  onHandleRemove(id: string) {
    const confirm = window.confirm("Are you sure you want to remove this product?")
    if (confirm) {
      this.projectService.removeProduct(id).subscribe(() => {
        this.projects = this.projects.filter(item => item.id !== id);
      })
    }
  }

}
