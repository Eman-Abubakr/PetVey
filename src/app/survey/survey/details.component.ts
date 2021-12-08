import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "src/app/model/survey.model";
import { SurveyRepository } from "src/app/model/survey.repository"


@Component({
    selector: "app-details",
    templateUrl: "./details.component.html"
})
export class DetailsComponent {
    public title: string = 'Details page';
    public survey: Survey;
 constructor(private repository: SurveyRepository,
             private router: Router,
             activeRoute: ActivatedRoute) {
                 this.survey = repository.getItem(activeRoute.snapshot.params["id"]);
                 console.log(this.survey);          
 }
 }
