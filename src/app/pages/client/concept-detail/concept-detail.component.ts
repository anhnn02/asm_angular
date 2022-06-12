import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConcept } from 'src/app/models/Concept';
import { ConceptService } from 'src/app/services/concept.service';

@Component({
  selector: 'app-concept-detail',
  templateUrl: './concept-detail.component.html',
  styleUrls: ['./concept-detail.component.css']
})
export class ConceptDetailComponent implements OnInit {
  concept!: IConcept
  constructor(private conceptService: ConceptService,
    private router: Router,
    private route: ActivatedRoute) {
    this.getProject()
  }

  ngOnInit(): void {
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.conceptService.getConcept(id).subscribe(data => {
        this.concept = data
      })
    }
  }

}
