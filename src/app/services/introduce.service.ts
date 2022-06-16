import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IInfo } from '../models/Info';
@Injectable({
    providedIn: 'root'
})
export class IntroService {
    API_URL: string = 'http://localhost:3001/';
    API_INFO: string = `${this.API_URL}info`;

    constructor(
        private http: HttpClient
    ) { }

    getInfo(id: string | number): Observable<IInfo> {
        return this.http.get<IInfo>(`${this.API_INFO}/${id}`);
    }
    updateInfo(info: IInfo) {
        return this.http.put<IInfo>(`${this.API_INFO}/${info.id}`, info);
    }
}
