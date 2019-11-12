import { Component } from "@angular/core";
import { File } from "@ionic-native/file/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  licenseCsv: File;
  reportsCsv: File;
  searchCsv: File;
  errors: boolean;
  filename: string;

  constructor() {}

  licenseCsvUpload($event): void {
    this.licenseCsv = $event.target.files[0];
    console.log(this.licenseCsv);
  }
  reportCsvUpload($event): void {
    this.reportsCsv = $event.target.files[0];
    console.log(this.reportsCsv);
  }
  searchCsvUpload($event): void {
    this.searchCsv = $event.target.files[0];
    console.log(this.searchCsv);
  }
}
