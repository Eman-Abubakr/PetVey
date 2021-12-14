import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from '../partials/partials.module';
import { SignInComponent } from "./login.component";
import { SignUpComponent } from "./register.component";
import { ChangePasswordComponent } from "./changepassword.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [SignInComponent,  SignUpComponent, ChangePasswordComponent],
    exports : [SignInComponent, SignUpComponent, ChangePasswordComponent]
})

export class AuthModule {}