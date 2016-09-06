import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {

    users: User[] = [new User('test', 'test','test')];

    contains(user: User): boolean {
        return !!this.users.find(item =>
            user.username === item.username && user.password === item.password);
    }

    addUser(user: User): boolean {
        if(this.contains(user)) return false;
        else {
            this.users.push(user);
            return true;
        }
    }
}