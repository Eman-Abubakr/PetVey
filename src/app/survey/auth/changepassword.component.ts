import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../model/auth.service";

@Component({
    //selector: 'app-login',
    templateUrl: "changepassword.component.html"
})

export class ChangePasswordComponent {
    public confirmPassword: string;
    public password: string;
    public newPassword: string;
    public message: string;
    public username: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    changePassword(form: NgForm) {
        if (form.valid) {
            // perform authentication
            this.auth.authenticate(this.username, this.password)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl(this.auth.redirectUrl || "");
                    }
                    this.message = "Authentication Failed";
                });
        } else {
            this.message = "Form Data Invalid";
        }
    }
}