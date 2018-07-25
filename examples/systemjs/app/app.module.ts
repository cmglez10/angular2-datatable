import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {DataTableModule} from "@cmglez10/ng-datatable";
import {DataFilterPipe} from "./data-filter.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        DataFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}