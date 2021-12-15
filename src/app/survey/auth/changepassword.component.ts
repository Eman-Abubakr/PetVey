import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../model/auth.service";

@Component({
    //selector: 'app-login',
    templateUrl: "changepassword.component.html"
})

export class ChangePasswordComponent {
    public username: string;
    public password: string;
    public newPassword: string;
    public confirmPassword: string;
    public message: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            // perform authentication
            this.auth.authenticate(this.username, this.newPassword)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl(this.auth.redirectUrl || "");
                    }
                    this.message = "Authentication Failed";
                });
        } else {
            this.message = "Form Data Invalid";
        }

        if (form.valid) {
            // perform authentication
            this.auth.authenticate(this.username, this.confirmPassword)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl(this.auth.redirectUrl || "");
                    }
                    this.message = "Authentication Failed";
                });
        } else {
            this.message = "Form Data Invalid";
        }

        
        
        if (form.valid) {
            // perform authentication
            this.auth.authenticate(this.newPassword, this.confirmPassword)
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