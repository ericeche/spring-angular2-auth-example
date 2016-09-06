import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {UserService} from "../../core/user.service";
import {User} from "../../core/user";


@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;

    constructor(private userService: UserService) {}

    login(user: User): Observable<boolean> {
        this.isLoggedIn = this.userService.contains(user);
        return Observable.of(this.isLoggedIn);
    }

    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }

    register(user: User): boolean {
        return this.userService.addUser(user);
    }
}