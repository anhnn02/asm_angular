import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    API_URL: string = 'http://localhost:3001/';
    API_PROJECT: string = `${this.API_URL}projects`;
    API_CONCEPT: string = `${this.API_URL}concepts`;
    API_CATEGORY: string = `${this.API_URL}categories`;
    
    constructor(
        private http: HttpClient
    ) { }

    getProject(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(`${this.API_PROJECT}/${id}`);
    }
    getProjectList(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.API_PROJECT);
    }
    removeProduct(id: string): Observable<IProduct[]> {
        return this.http.delete<IProduct[]>(`${this.API_PROJECT}/${id}`);
    }
    addProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(`${this.API_PROJECT}`, product)
    }
    updateProduct(product: IProduct) {
        return this.http.put<IProduct>(`${this.API_PROJECT}/${product.id}`, product);
    }
}

// B1: Khai báo HttpClientModule trong app.module.ts
// B2: Khai báo HttpClient trong services
// B3: Inject services HttpClient