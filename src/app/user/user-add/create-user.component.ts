import { UserService } from '../services/user.service';
import { DepartmentService } from '../../department/services/department.service';
import { CountryService } from '../../country/services/country.service';
import { SaluationService } from '../../saluation/services/saluation.service';
import { Router, ActivatedRoute } from '@angular/router';


import { User } from '../services/user';
import { Country } from '../../country/services/country';
import { Department } from '../../department/services/department';
import { Saluation } from '../../saluation/services/saluation';


import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/province/services/province';
import { ProvinceService } from 'src/app/province/services/province.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  province: Province = new Province();
  country: Country = new Country();
  department: Department = new Department();
  saluation: Saluation = new Saluation();
  submitted = false;
  isUpdate = false;

  constructor(
    private provinceService: ProvinceService,
    private countryService: CountryService,
    private departmentService: DepartmentService,
    private saluationService: SaluationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isUpdate = true;
      this.getUser(id);
    } else {
      this.user.user_department = "0";
      this.user.user_sal = "0";
      this.user.user_province = "0";
      this.user.user_country = "0";
    }
    this.getProvinceOption();
    this.getCountryOption();
    this.getSaluationOption();
    this.getDepartmentOption();
  }

  getUser(id): void {
    this.userService.getUser(id).subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      err => {
        console.log(err);
      }
    );

  }
  
  getProvinceOption(): void {
    this.provinceService.getProvincesList().subscribe(
      data => {
        console.log(data);
        this.province = data;
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

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.router.navigate(['/users']);
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
      this.updateUser();
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

  updateUser(): void {
    console.log(this.user);
    this.userService.updateUser(this.user.user_id, this.user).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.router.navigate(['/users']);
      },
      err => {
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }
}
