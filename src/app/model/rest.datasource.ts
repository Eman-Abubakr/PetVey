import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "./survey.model";
import { User } from "./user.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

import { ResponseModel } from "./response.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
    backendUrl: string = "localhost:3000";
    //backendUrl: string = "petvey-backend.herokuapp.com";
    baseUrl: string;
    auth_token: string;
    currentUserId: String;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${this.backendUrl}/`;
    }

    getSurveyList(): Observable<any> {
        return this.http.get<any>(this.baseUrl + "api/list");
    }

    insertSurvey(item: Survey): Observable<Survey> {
        return this.http.post<Survey>(this.baseUrl + "api/create",
            item, this.getOptions());
    }

    updateSurvey(item: Survey): Observable<Survey> {
        return this.http.put<Survey>(`${this.baseUrl}api/edit/${item._id}`,
            item, this.getOptions());
    }

    deleteSurvey(id: string): Observable<ResponseModel> {
        return this.http.delete<any>(`${this.baseUrl}api/delete/${id}`,
            this.getOptions()).pipe(map(response => {
                return response;
            }));
    }

    authenticate(username: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "users/signin", {
            username: username, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            this.currentUserId = response.success ? response.userID : null;
            return response.success;
        }));
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", {user})
            .pipe(map(response => {
                return response;
            }));
    }

    getCurrentUserId(): String {
        return this.currentUserId
    }
    
    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
