import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {AuthModule} from "./auth/auth.module";

@NgModule({
    imports: [
        BrowserModule,
        AuthModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}