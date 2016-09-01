import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

    model = {
        email: '',
        username: '',
        password: ''
    };

    onSubmit(): void {
        console.log(this.model);
    }
}