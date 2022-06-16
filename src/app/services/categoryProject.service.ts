import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategoryProject } from '../models/CategoryProject';
@Injectable({
    providedIn: 'root'
})
export class CategoryProjectService {
    API_URL: string = 'http://localhost:3001/';
    API_CATEGORY: string = `${this.API_URL}cateProjects`;

    constructor(
        private http: HttpClient
    ) { }

    getCategory(id: string | number): Observable<ICategoryProject> {
        return this.http.get<ICategoryProject>(`${this.API_CATEGORY}/${id}`);
    }
    getCategoryList(): Observable<ICategoryProject[]> {
        return this.http.get<ICategoryProject[]>(this.API_CATEGORY);
    }
    removeCategory(id: string | number): Observable<ICategoryProject[]> {
        return this.http.delete<ICategoryProject[]>(`${this.API_CATEGORY}/${id}`);
    }
    addCategory(Category: ICategoryProject): Observable<ICategoryProject> {
        return this.http.post<ICategoryProject>(`${this.API_CATEGORY}`, Category)
    }
    updateCategory(Category: ICategoryProject) {
        return this.http.put<ICategoryProject>(`${this.API_CATEGORY}/${Category.id}`, Category);
    }
}

// B1: Khai báo HttpClientModule trong app.module.ts
// B2: Khai báo HttpClient trong services
// B3: Inject services HttpClient