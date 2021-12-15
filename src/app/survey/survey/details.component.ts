import { Component } from "@angular/core";
import { Form } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "src/app/model/survey.model";
import { SurveyRepository } from "src/app/model/survey.repository"


@Component({
    selector: "app-details",
    templateUrl: "./details.component.html"
})
export class DetailsComponent {
    public title: string = 'Details Page';
    surveyResponse: Form;
    surveyToTake: Survey;

    constructor( private repository: SurveyRepository,
        private router: Router,
        private activeRoute: ActivatedRoute) {
            this.surveyToTake = this.repository.getItem(this.activeRoute.snapshot.params["id"]);
        }
}
