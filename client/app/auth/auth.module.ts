import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AuthComponent} from "./auth.component";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/components/button/button";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabViewModule,
        ButtonModule
    ],
    declarations: [AuthComponent, LoginFormComponent, RegisterFormComponent],
    exports: [AuthComponent]
})
export class AuthModule {}