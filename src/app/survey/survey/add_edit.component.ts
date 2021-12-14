import { Component } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "../../model/survey.model";
import { SurveyRepository } from "../../model/survey.repository";
import {MatRadioModule} from "@angular/material/radio";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    editing: boolean = false;
    survey: Survey = new Survey();

    constructor(private repository: SurveyRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deletesurvey(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.survey = repository.getItem(activeRoute.snapshot.params["id"]);
        } else this.survey.owner = this.repository.getCurrentUserID();
        console.log(this.survey);
    }


    save(form: NgForm) {
        console.log(this.survey);
        this.repository.saveSurvey(this.survey);
        this.router.navigateByUrl("survey/mysurveys");
    }

    private deletesurvey(id: string){
        this.repository.deleteSurvey(id);
        this.router.navigateByUrl("survey/mysurveys");
    }

    addQuestionButtonClick() {
        if (this.survey.Questions == undefined) this.survey.Questions = [{QuestionBody: "", AnswerType: "", MultipleChoiceAnswers: []}];
        else this.survey.Questions.push({QuestionBody: "", AnswerType: "", MultipleChoiceAnswers: []});
        console.log(this.survey);
    }
}