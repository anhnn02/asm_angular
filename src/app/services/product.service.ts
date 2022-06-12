import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProject } from '../models/Product';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    API_URL: string = 'http://localhost:3001/';
    API_PROJECT: string = `${this.API_URL}projects`;
    API_CATEGORY: string = `${this.API_URL}categories`;
    
    constructor(
        private http: HttpClient
    ) { }

    getProject(id: string | number): Observable<IProject> {
        return this.http.get<IProject>(`${this.API_PROJECT}/${id}`);
    }
    getProjectList(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.API_PROJECT);
    }
    removeProduct(id: string | number): Observable<IProject[]> {
        return this.http.delete<IProject[]>(`${this.API_PROJECT}/${id}`);
    }
    addProduct(product: IProject): Observable<IProject> {
        return this.http.post<IProject>(`${this.API_PROJECT}`, product)
    }
    updateProduct(product: IProject) {
        return this.http.put<IProject>(`${this.API_PROJECT}/${product.id}`, product);
    }
}

// B1: Khai báo HttpClientModule trong app.module.ts
// B2: Khai báo HttpClient trong services
// B3: Inject services HttpClient