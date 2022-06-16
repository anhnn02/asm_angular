import { Component, OnInit } from '@angular/core';
import { IConcept } from 'src/app/models/Concept';
import { ConceptService } from 'src/app/services/concept.service';

@Component({
  selector: 'app-list-concept',
  templateUrl: './list-concept.component.html',
  styleUrls: ['./list-concept.component.css']
})
export class ListConceptComponent implements OnInit {
  concepts!: IConcept[];
  constructor(private conceptService: ConceptService) {
    this.getAllProduct()
  }

  ngOnInit(): void {
  }

  getAllProduct() {
    this.conceptService.getConceptList().subscribe(data => {
      this.concepts = data
    })
  }

  onHandleRemove(id: string | number) {
    const confirm = window.confirm("Are you sure you want to remove this concept?")
    if (confirm) {
      this.conceptService.removeConcept(id).subscribe(() => {
        this.concepts = this.concepts.filter(item => item.id !== id);
      })
    }
  }

}
