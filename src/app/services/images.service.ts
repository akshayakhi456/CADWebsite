import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ImagesService {
    constructor(private http: HttpClient) {}

    getCaddImage(): Observable<any> {
        return this.http.get('../../assests/intern-cadd.jpg');
    }
}