import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../services/department';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  department: Department = new Department();
  submitted = false;
  isUpdate = false;

  constructor(private departmentService: DepartmentService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isUpdate = true;
      this.getDepartment(id);
    } else {
      console.log("Cannot update department");
    }
  }

  getDepartment(id): void {
    this.departmentService.getDepartment(id).subscribe(
      data => {
        console.log(data);
        this.department = data;
      },
      err => {
        console.log(err);
      }
    );

  }

  newDepartment(): void {
    this.submitted = false;
    this.department = new Department();
  }

  save() {
    console.log(this.department);
    this.departmentService.createDepartment(this.department).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.router.navigate(['/departments']);
      },
      err => {
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateDepartment();
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

  updateDepartment(): void {
    console.log(this.department);
    this.departmentService.updateDepartment(this.department.department_id, this.department).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.router.navigate(['/departments']);
      },
      err => {
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }

}
