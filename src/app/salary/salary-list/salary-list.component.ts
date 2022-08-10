import { SalaryService } from "../services/salary.service";
import { Salary } from "../services/salary";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-salary-list",
  templateUrl: "./salary-list.component.html",
  styleUrls: ["./salary-list.component.css"]
})
export class SalaryListComponent implements OnInit {
  salaries: Observable<Salary[]>;

  constructor(private salaryService: SalaryService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.salaries = this.salaryService.getSalariesList();
  }

  deleteSalary(id: number) {
    this.salaryService.deleteSalary(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
