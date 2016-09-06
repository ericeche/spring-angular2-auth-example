import {Component} from "@angular/core";
import {AuthService} from "../auth/services/auth.service";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private authService: AuthService,
                private router: Router) {}

    logOut(): void {
        this.authService.logOut().subscribe(() => {
            if(this.authService.isLoggedIn === false) {
                this.router.navigate(['/auth']);
            }
        })
    }

}