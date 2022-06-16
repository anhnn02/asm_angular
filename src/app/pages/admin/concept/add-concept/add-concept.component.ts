import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConcept } from 'src/app/models/Concept';
import { ConceptService } from 'src/app/services/concept.service';

@Component({
  selector: 'app-add-concept',
  templateUrl: './add-concept.component.html',
  styleUrls: ['./add-concept.component.css']
})
export class AddConceptComponent implements OnInit {
  concept: IConcept = {
    name: "",
    img: "",
    link: "",
    imgSub: "",
    tech: "" ,
    nameTech: "",
    descShort: "",
    desc: "",
    cateConceptId: 0,
  }
  nameForm: string = "Add concept"
  constructor(
    private conceptService: ConceptService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.nameForm = "Edit concept"
      this.conceptService.getConcept(id).subscribe(data => {
        this.concept = data
      })
    }
  }
  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.conceptService.updateConcept(this.concept).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/concept');
        }, 2000)
      })
    } else {
      this.conceptService.addConcept(this.concept).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/concept');
        }, 2000)
      });
    }

  }


}
