import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Survey } from "../../model/survey.model";
import { SurveyRepository } from "../../model/survey.repository";

@Component({
    selector: "mysurveys",
    templateUrl: "mysurveys.component.html"
})

export class MySurveysComponent {


    constructor(private repository: SurveyRepository,
        private router: Router) 
    { }


    get surveyList(): Survey[] {
        console.log(this.repository.getUserSurveyList());
        return this.repository.getUserSurveyList();        
    }

    deleteMethod(id: String) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("survey/delete/"+id);
        }
    }
    
}