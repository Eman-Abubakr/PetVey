import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "src/app/model/survey.model";
import { SurveyRepository } from "src/app/model/survey.repository"


@Component({
    selector: "answers",
    templateUrl: "answers.component.html"
})

export class AnswersComponent {
    public title: string = 'SURVEY ANSWERS';
    //public survey: Survey;
    public answers: AnswersComponent;
 constructor(private repository: SurveyRepository,
             private router: Router){}

             get surveyAnswers ():Survey[] {
                return this.repository.getSurveyAnswers()

            //  activeRoute: ActivatedRoute) {
            //     this.survey = repository.getItem(activeRoute.snapshot.params["id"]);
                // console.log(this.survey);          
 }
 }



 

