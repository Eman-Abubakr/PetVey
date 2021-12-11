import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey } from "../../model/survey.model";
import { SurveyRepository } from "../../model/survey.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    editing: boolean = false;
    survey: Survey = new Survey();
    questionCount: number;

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
        } 
    
        this.survey.owner = this.repository.getCurrentUserID();
    }


    save(form: NgForm) {
        this.repository.saveSurvey(this.survey);
        this.router.navigateByUrl("survey/mysurveys");
    }

    private deletesurvey(id: string){
        this.repository.deleteSurvey(id);
        this.router.navigateByUrl("survey/mysurveys");
    }

    addQuestionButtonClick() {
        if (this.questionCount == undefined) this.questionCount = 1;
        else this.questionCount++;
        console.log(this.questionCount);
      // question container
      var container = document.createElement("div");
      container.setAttribute("class", "form-group");
      //label
      var qLabel = document.createElement("label");
      qLabel.setAttribute("for", `Question${this.questionCount}`);
      qLabel.innerHTML = `Question ${this.questionCount}.`;
      container.appendChild(qLabel);
      // input
      var qInput = document.createElement("input");
      qInput.setAttribute("type", "text");
      qInput.setAttribute("class", "form-control");
      qInput.setAttribute("id", "statusTextField");
      qInput.setAttribute("placeholder", "Your Question");
      qInput.setAttribute("name", `Question${this.questionCount}`);
      container.appendChild(qInput);
      // Answer Type Radios
      var aTLabel = document.createElement("label");
      aTLabel.innerHTML = "Answer Type";
      aTLabel.setAttribute("for", `AnswerTypeField`);
      container.appendChild(aTLabel);
      container.appendChild(document.createElement("br"));

      for (var i = 0; i < 5; i++) {
        // label
        var aLabel = document.createElement("label");
        aLabel.setAttribute("for", `AnswerRadio${i}`);
        var aRadioButton = document.createElement("input");
        aRadioButton.setAttribute("type", "radio");
        aRadioButton.setAttribute("name", `AnswerRadio${i}`);
        aRadioButton.setAttribute(
          "id",
          `${this.questionCount}AnswerRadioChoice${i + 1}`
        );

        var aType;
        switch (i) {
          case 0:
            aType = "True or False";
            break;
          case 1:
            aType = "Scale";
            break;
          case 2:
            aType = "Multiple Choice";
            break;
          case 3:
            aType = "Short Answer";
            break;
          case 4:
            aType = "Long Answer";
            break;
          default:
            break;
        }
        aLabel.innerHTML = aType;
        aRadioButton.setAttribute("value", aType);
        aLabel.appendChild(aRadioButton);
        container.appendChild(aLabel);
      }
      
      // add final question element to form
      document.getElementById("questionGroupContainer").appendChild(container);
    }
}