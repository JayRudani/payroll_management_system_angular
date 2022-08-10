import { EmployeeService } from '../services/employee.service';
import { StateService } from '../../state/services/state.service';
import { DepartmentService } from '../../department/services/department.service';
import { CountryService } from '../../country/services/country.service';
import { SaluationService } from '../../saluation/services/saluation.service';
import { Router, ActivatedRoute } from '@angular/router';


import { Employee } from '../services/employee';
import { State } from '../../state/services/state';
import { Country } from '../../country/services/country';
import { Department } from '../../department/services/department';
import { Saluation } from '../../saluation/services/saluation';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  state: State = new State();
  country: Country = new Country();
  department: Department = new Department();
  saluation: Saluation = new Saluation();
  submitted = false;
  isUpdate = false;

  constructor(
    private stateService: StateService,
    private countryService: CountryService,
    private departmentService: DepartmentService,
    private saluationService: SaluationService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isUpdate = true;
      this.getEmployee(id);
    } else {
      this.employee.employee_department = "";
      this.employee.employee_sal = "";
      this.employee.employee_state = "";
      this.employee.employee_country = "";
    }
    this.getStateOption();
    this.getCountryOption();
    this.getSaluationOption();
    this.getDepartmentOption();
  }

  getEmployee(id): void {
    this.employeeService.getEmployee(id).subscribe(
      data => {
        console.log(data);
        this.employee = data;
      },
      err => {
        console.log(err);
      }
    );

  }
  
  getStateOption(): void {
    this.stateService.getStatesList().subscribe(
      data => {
        console.log(data);
        this.state = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getCountryOption(): void {
    this.countryService.getCountriesList().subscribe(
      data => {
        console.log(data);
        this.country = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getDepartmentOption(): void {
    this.departmentService.getDepartmentsList().subscribe(
      data => {
        console.log(data);
        this.department = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getSaluationOption(): void {
    this.saluationService.getSaluationsList().subscribe(
      data => {
        console.log(data);
        this.saluation = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.router.navigate(['/employees']);
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
      this.updateEmployee();
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

  updateEmployee(): void {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee.employee_id, this.employee).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.router.navigate(['/employees']);
      },
      err => {
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }
}
