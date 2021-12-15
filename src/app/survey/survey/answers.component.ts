import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "src/app/model/survey.model";
import { SurveyRepository } from "src/app/model/survey.repository"
import { Form } from "@angular/forms";

@Component({
    selector: "app-answers",
    templateUrl: "./answers.component.html"
})

export class AnswersComponent {
    public title: string = 'SURVEY ANSWERS';
    public answers: AnswersComponent;
    surveyResponse: Form;
    surveyToTake: Survey;
    
    constructor(private repository: SurveyRepository,
                private router: Router,
                private activeRoute: ActivatedRoute){
                    this.surveyToTake = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
                }
 }



 

