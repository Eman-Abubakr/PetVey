import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from '../partials/partials.module';
import { ListComponent } from "./list.component";
import { MySurveysComponent } from "./mysurveys.component";
import { AddEditComponent } from "./add_edit.component";
import { AboutComponent } from "./about.component";
import { DetailsComponent } from "./details.component";
import { MatRadioModule } from "@angular/material/radio";
//import { AnswersComponent } from "./answers.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule, MatRadioModule],
    declarations: [ListComponent, MySurveysComponent, AddEditComponent,AboutComponent, DetailsComponent],//AnswersComponent
    exports : [ListComponent, MySurveysComponent, AddEditComponent,AboutComponent, DetailsComponent]//AnswersComponent
})

export class SurveyModule {}