import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project!: IProject 
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
      this.getProject()
     }

  ngOnInit(): void {
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if(id) {
      this.productService.getProject(id).subscribe(data => {
        this.project = data
      })
    }
  }
}
