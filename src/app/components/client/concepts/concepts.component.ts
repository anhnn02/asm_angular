import { Component, OnInit } from '@angular/core';
import { IConcept } from 'src/app/models/Concept';
import { ConceptService } from 'src/app/services/concept.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {
  concepts!: IConcept[];
  constructor(private projectService: ConceptService) {
    this.getAllConcept()
  }

  ngOnInit(): void {
  }
  getAllConcept() {
    this.projectService.getConceptList().subscribe(data => {
      this.concepts = data
    })
  }
  splitArray = (arr: string) => {
    return arr.split(", ")
  }

}
