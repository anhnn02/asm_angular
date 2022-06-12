import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IConcept } from '../models/Concept';
@Injectable({
    providedIn: 'root'
})
export class ConceptService {
    API_URL: string = 'http://localhost:3001/';
    API_CONCEPT: string = `${this.API_URL}concepts`;
    API_CATEGORY: string = `${this.API_URL}categories`;

    constructor(
        private http: HttpClient
    ) { }

    getConcept(id: string | number): Observable<IConcept> {
        return this.http.get<IConcept>(`${this.API_CONCEPT}/${id}`);
    }
    getConceptList(): Observable<IConcept[]> {
        return this.http.get<IConcept[]>(this.API_CONCEPT);
    }
    removeConcept(id: string | number): Observable<IConcept[]> {
        return this.http.delete<IConcept[]>(`${this.API_CONCEPT}/${id}`);
    }
    addConcept(product: IConcept): Observable<IConcept> {
        return this.http.post<IConcept>(`${this.API_CONCEPT}`, product)
    }
    updateProduct(product: IConcept) {
        return this.http.put<IConcept>(`${this.API_CONCEPT}/${product.id}`, product);
    }
}
