import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SortBy, SortOrder} from "ng-datatable";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy: SortBy = "email";
    public sortOrder: SortOrder = "asc";

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<any[]>("/data.json")
            .subscribe((data) => {
                setTimeout(() => {
                    this.data = data;
                }, 2000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item: any) {
        const index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }

}
