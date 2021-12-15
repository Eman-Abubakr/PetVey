import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";
import { Observable } from "rxjs";

@Injectable()
export class SurveyRepository {
    private survey: Survey[] = [];
    private userSurveyList: Survey[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getSurveyList().subscribe(data => {
            this.survey = data.surveyList;
            this.userSurveyList = data.surveyList.filter((survey: Survey) => survey.owner === this.getCurrentUserID());
        });

    }

    getSurveyList(): Survey[] {
        return this.survey;
    }
    
    getUserSurveyList(): Survey[] {
        return this.userSurveyList;
    }


    getSurveyAnswers(): Survey[] {
         this.userSurveyList = [];
         if (this.dataSource.currentUserId == null) return null;
         this.survey.forEach((survey: Survey) => {
             if (survey.owner === this.getCurrentUserID()) this.userSurveyList.push(survey);
         });
         return this.getSurveyAnswers();
    }

    getItem(id: string): Survey {
        return (this.survey.find(item => item._id === id)!);
    }

    getCurrentUserID(): String {
        if (this.dataSource.currentUserId == null) return null;
        return this.dataSource.currentUserId.toString();
    }

    saveSurvey(item: Survey) {
        if (item._id == null || item._id == "") {
            this.dataSource.insertSurvey(item)
                .subscribe(p => this.survey.push(p));
        } else {
            this.dataSource.updateSurvey(item)
                .subscribe(p => {
                    this.survey.splice(this.survey.
                        findIndex(i => i._id == item._id), 1, item);
                });
        }
    }

    deleteSurvey(id: string) {
        this.dataSource.deleteSurvey(id).subscribe(response => {
            if (response.success) {
                this.survey.splice(this.survey.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(response.message);
            }
        })
    }
}