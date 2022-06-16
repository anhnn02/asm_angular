import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategoryBlog } from '../models/CategoryBlog';
@Injectable({
    providedIn: 'root'
})
export class CategoryBlogService {
    API_URL: string = 'http://localhost:3001/';
    API_CATEGORY: string = `${this.API_URL}cateBlogs`;

    constructor(
        private http: HttpClient
    ) { }

    getCategory(id: string | number): Observable<ICategoryBlog> {
        return this.http.get<ICategoryBlog>(`${this.API_CATEGORY}/${id}`);
    }
    getCategoryList(): Observable<ICategoryBlog[]> {
        return this.http.get<ICategoryBlog[]>(this.API_CATEGORY);
    }
    removeCategory(id: string | number): Observable<ICategoryBlog[]> {
        return this.http.delete<ICategoryBlog[]>(`${this.API_CATEGORY}/${id}`);
    }
    addCategory(Category: ICategoryBlog): Observable<ICategoryBlog> {
        return this.http.post<ICategoryBlog>(`${this.API_CATEGORY}`, Category)
    }
    updateCategory(Category: ICategoryBlog) {
        return this.http.put<ICategoryBlog>(`${this.API_CATEGORY}/${Category.id}`, Category);
    }
}
