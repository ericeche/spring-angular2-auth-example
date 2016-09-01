import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login-form.component.html',
})
export class LoginFormComponent {

    model = {
        username: '',
        password: ''
    };

    onSubmit(): void {
        console.log(this.model);
    }
}