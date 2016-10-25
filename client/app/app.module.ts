import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {CoreModule} from "./core/core.module";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import {routing} from "./app.routing";

import {AppComponent} from "./app.component";
import {XSRFStrategy, CookieXSRFStrategy} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AuthModule,
        HomeModule,
        routing
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: XSRFStrategy,
            useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
        }

    ],
})
export class AppModule {}

document.cookie = "XSRF-TOKEN=Dont-Tase-Me-Bro";
