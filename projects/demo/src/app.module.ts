import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { DataTableModule } from "ng-datatable";

import { DataFilterPipe } from "./data-filter.pipe";
import { AppComponent } from "./app.component";

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
