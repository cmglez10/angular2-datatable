import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<any[]>("/app/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
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

    public remove(item) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

}