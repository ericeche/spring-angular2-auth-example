import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../core/user";
import {Message} from "primeng/components/common/api";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {

    model: User;
    msgs: Message[] = [];

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.model = new User('', '', '');
    }

    onSubmit(): void {
        this.authService.login(this.model).subscribe(() => {
            if (this.authService.isLoggedIn) {
                this.router.navigate(['/home']);
            } else {
                this.msgs.push({severity:'error', summary:'Email/password incorrect!'});
            }
        });
    }
}