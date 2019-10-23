import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataUser } from 'src/app/services/user/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  userId: string;
  userForm: FormGroup;
  user: DataUser;
  props: string[];

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.createForm();
    this.props = Object.keys(this.userForm.controls);
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.userId = params.id;
        this.loadSingleUser(this.userId);
      }
    });
  }

  loadSingleUser(id: string) {
    this.userService.getSingleUser(id).subscribe(data => {
      if (data) {
        this.user = data;
        this.fillForm();
      }
    }, error => {
      console.error(error);
    });
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      gender: [''],
      position: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: [''],
      zipcode: ['', Validators.required],
      company: ['']
    });
  }

  fillForm() {
    this.userForm.setValue({
      title: this.user.title,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      gender: this.user.gender,
      position: this.user.position,
      city: this.user.city,
      country: this.user.country,
      phone: this.user.phone,
      zipcode: this.user.zipcode,
      company: this.user.company
    });
  }

  submit(userForm: FormGroup) {
    const formValue: DataUser = userForm.value;
    if (this.userId === 'new') {
      this.userService.createUser(formValue).subscribe(_ => {
        console.log('user created');
        this.location.back();
      }, error => {
        console.error(error);
      });
    } else {
      this.userService.updateUser(this.userId, formValue).subscribe(data => {
        this.user = data;
        this.fillForm();
      }, error => {
        console.error(error);
      });
    }
  }

}
