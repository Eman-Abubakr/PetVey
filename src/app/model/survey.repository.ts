import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { ResponseModel } from "./response.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class SurveyRepository {
    private survey: Survey[] = [];
    private currentUserId: String;

    constructor(private dataSource: RestDataSource) {
        dataSource.getSurveyList().subscribe(data => {
            this.survey = data.surveyList;
        });
        this.currentUserId = dataSource.getCurrentUserId();
    }

    getSurveyList(): Survey[] {
        console.log(this.survey);
        return this.survey;
    }
    
    getUserSurveyList(): Survey[] {
        let userSurveys: Survey[] = [];
        this.survey.forEach(item => {
            console.log(item);
            if (item.owner === this.currentUserId) {
                userSurveys.push(item);
            }
        });
        return userSurveys;
    }

    getItem(id: string): Survey {
        return (this.survey.find(item => item._id === id)!);
    }

    getCurrentUserID(): String {
        return this.currentUserId;
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