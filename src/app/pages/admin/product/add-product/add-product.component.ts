import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  project: IProject = {
    name: "",
    desc: "",
    img: "",
    link: "",
    tech: "",
    techSheet: "",
    descShort: "",
  }
  nameForm: string = "Add product"
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.nameForm = "Edit product"
      this.productService.getProject(id).subscribe(data => {
        this.project = data
      })
    }
  }
  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.updateProduct(this.project).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/product');
        }, 2000)
      })
    } else{
      this.productService.addProduct(this.project).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/product');
        }, 2000)
      });
    }
    
  }

}
