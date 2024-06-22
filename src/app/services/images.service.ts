import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urls } from "../shared/api-constants";

@Injectable({
    providedIn: 'root'
})
export class ImagesService {
    constructor(private http: HttpClient) {}

    addEnquiryForm(payload: any): Observable<any> {
        return this.http.post(urls.addEnquiry,payload);
    }

    listEnquiryForm(): Observable<any> {
        return this.http.get(urls.getEnquiry);
    }

    addBanner(payload: FormData): Observable<any> {
        const options = {} as any;
        return this.http.post(urls.addImage,payload, options);
    }

    getAllBanners(): Observable<any> {
        return this.http.get(urls.getAllImage);
    }

    removeBanner(id: number): Observable<any> {
        return this.http.delete(urls.deleteImage+id);
    }

    login(params: any): Observable<any> {
        return this.http.post(urls.loginPage, params);
    }
}