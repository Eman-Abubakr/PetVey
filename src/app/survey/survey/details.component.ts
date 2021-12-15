import { Component } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "src/app/model/survey.model";
import { SurveyRepository } from "src/app/model/survey.repository"
import { SurveyResponse } from "src/app/model/surveyresponse.model";


@Component({
    selector: "app-details",
    templateUrl: "./details.component.html"
})
export class DetailsComponent {
    public title: string = 'Details Page';
    surveyResponse: SurveyResponse = new SurveyResponse();
    surveyToTake: Survey;

    constructor( private repository: SurveyRepository,
        private router: Router,
        private activeRoute: ActivatedRoute) {
            this.surveyToTake = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
            // creates a new question object array if undefined and splices out the empty object needed to instantiate
            if (this.surveyResponse.Questions === undefined) {
                this.surveyResponse.Questions = [{}];
                this.surveyResponse.Questions.splice(0, 1);
            }
            // cycle through surveyToTake questions, creating new response objects with the question body
            for (var i = 0; i < this.surveyToTake.Questions.length; i++) {
                this.surveyResponse.Questions.push({questionBody: this.surveyToTake.Questions[i].QuestionBody, answer:'', answerType: this.surveyToTake.Questions[i].AnswerType});
            }
        }

    saveResponse(form: NgForm) {
        this.repository.submitUserSurveyResponse(this.surveyResponse, this.surveyToTake);
    }
}
