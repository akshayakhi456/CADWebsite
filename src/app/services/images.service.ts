import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environments";

@Injectable({
    providedIn: 'root'
})
export class ImagesService {
    apiUrl = environment.apiUrl;
    readonly addEnquiry = this.apiUrl+'/candidate/addCandidateInfo';
    readonly getEnquiry = this.apiUrl+'/candidate/getCandidates';
    readonly addImage = this.apiUrl+'/banner/upload';
    readonly getAllImage = this.apiUrl+'/banner/get';
    readonly deleteImage = this.apiUrl+'/banner/delete/';

    constructor(private http: HttpClient) {}

    getCaddImage(): Observable<any> {
        return this.http.get('../../assests/intern-cadd.jpg');
    }

    addEnquiryForm(payload: any): Observable<any> {
        return this.http.post(this.addEnquiry,payload);
    }

    listEnquiryForm(): Observable<any> {
        return this.http.get(this.getEnquiry);
    }

    addBanner(payload: FormData): Observable<any> {
        const options = {} as any;
        return this.http.post(this.addImage,payload, options);
    }

    getAllBanners(): Observable<any> {
        return this.http.get(this.getAllImage);
    }

    removeBanner(id: number): Observable<any> {
        return this.http.delete(this.deleteImage+id);
    }
}