import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PartialsModule } from './survey/partials/partials.module';
import { SurveyModule } from './survey/survey/survey.module';
import { IndexModule } from './survey/index.module';
import { IndexComponent } from './survey/index.component';
import { ListComponent } from './survey/survey/list.component';
import { MySurveysComponent } from './survey/survey/mysurveys.component';
import { AuthModule } from "./survey/auth/auth.module";
import { SignInComponent } from './survey/auth/login.component';
import { SignUpComponent } from './survey/auth/register.component';
import { AuthGuard } from "./survey/auth/auth.guard";
import { AddEditComponent } from './survey/survey/add_edit.component'
import { AboutComponent } from './survey/survey/about.component'
import { DetailsComponent } from './survey/survey/details.component';
import { AnswersComponent } from './survey/survey/answers.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './survey/auth/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    SurveyModule,
    AuthModule,

    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "users/login", component: SignInComponent },
      { path: "users/register", component: SignUpComponent },
      { path: "users/changepassword", component: ChangePasswordComponent },
      { path: "survey/about", component: AboutComponent},
      { path: "survey/details/:id", component: DetailsComponent},
      { path: "survey/list", component: ListComponent },
      { path: "survey/mysurveys", component: MySurveysComponent, canActivate: [AuthGuard] },
      { path: "survey/answers/:id", component: AnswersComponent, canActivate: [AuthGuard] },
      { path: "survey/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "survey/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "**", redirectTo: "" }
    ]),

    NoopAnimationsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
