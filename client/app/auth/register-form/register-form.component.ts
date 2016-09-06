import {Component, OnInit} from "@angular/core";
import {User} from "../../core/user";
import {AuthService} from "../services/auth.service";
import {Message} from "primeng/components/common/api";

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {

    model: User;
    msgs: Message[] = [];

    constructor(private authService: AuthService) {}


    ngOnInit(): void {
        this.model = new User('', '', '');
    }

    onSubmit(): void {
        this.msgs = [];
        if(this.authService.register(this.model)) {
            this.msgs.push({severity:'info', summary:'Registered successfully!'});
        } else {
            this.msgs.push({severity:'error', summary:'Email already in use'});
        }
    }
}