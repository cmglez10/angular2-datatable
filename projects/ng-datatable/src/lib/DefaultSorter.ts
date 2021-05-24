import {Component, Input, OnInit} from "@angular/core";
import {DataTable, SortBy, SortEvent} from "./DataTable";

@Component({
    selector: "mfDefaultSorter",
    template: `
        <a style="cursor: pointer" (click)="sort()" (keydown.enter)="sort()" (keydown.space)="sort()" class="text-nowrap" tabindex="0">
            <ng-content></ng-content>
            <span *ngIf="isSortedByMeAsc" class="glyphicon glyphicon-triangle-top" aria-hidden="true" aria-label="asc"></span>
            <span *ngIf="isSortedByMeDesc" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true" aria-label="desc"></span>
        </a>`
})
export class DefaultSorter implements OnInit {
    @Input("by") sortBy: SortBy;

    isSortedByMeAsc = false;
    isSortedByMeDesc = false;

    public constructor(private mfTable: DataTable) {
    }

    public ngOnInit(): void {
        this.mfTable.onSortChange.subscribe((event: SortEvent) => {
            // tslint:disable:triple-equals
            this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == "asc");
            this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == "desc");
            // tslint:enable:triple-equals
        });
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        } else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
        return false;
    }
}
