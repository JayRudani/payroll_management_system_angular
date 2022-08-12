import { Component, OnInit } from '@angular/core';
import { DepartmentService } from "../../services/department.service";
import { Department } from "../../services/department";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Observable<Department[]>;

  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.departments = this.departmentService.getDepartmentsList();
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
