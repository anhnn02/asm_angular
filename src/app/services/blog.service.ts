import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBlog } from '../models/Blog';
@Injectable({
    providedIn: 'root'
})
export class BlogService {
    API_URL: string = 'http://localhost:3001/';
    API_BLOG: string = `${this.API_URL}blogs`;
    
    constructor(
        private http: HttpClient
    ) { }

    getBlog(id: string | number): Observable<IBlog> {
        return this.http.get<IBlog>(`${this.API_BLOG}/${id}?_expand=cateBlog`);
    }
    getBlogList(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(`${this.API_BLOG}?_expand=cateBlog`);
    }
    removeBlog(id: string | number ): Observable<IBlog[]> {
        return this.http.delete<IBlog[]>(`${this.API_BLOG}/${id}`);
    }
    addBlog(blog: IBlog): Observable<IBlog> {
        return this.http.post<IBlog>(`${this.API_BLOG}`, blog)
    }
    updateBlog(blog: IBlog) {
        return this.http.put<IBlog>(`${this.API_BLOG}/${blog.id}`, blog);
    }
    getRelatedBlog(id: string | number): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(`http://localhost:3001/cateBlogs/${id}?_embed=blogs`);
    }
}
