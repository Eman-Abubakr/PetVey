import { Component } from "@angular/core";
import { Survey } from "src/app/model/survey.model";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html"
})
export class DetailsComponent {
    public title: string = 'Details page';
    public survey: Survey;
 constructor() {}
 }
