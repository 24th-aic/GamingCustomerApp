import { Component, OnInit  } from '@angular/core';
import { UsersService } from '../user.service';
import { Users } from '../user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

model: Users = {username: "admin",
password: "admin"};
loginForm: FormGroup;
message: string;
returnUrl: string;

constructor(private forBuilder:
  FormBuilder, private router:
  Router, public authService:
  AuthService){}

ngOnInit(){
  this.loginForm = this.forBuilder.group({
    username: ['', Validators.required],
    password: ['',
    Validators.required]
  });
    this.returnUrl = "/report";
    this.authService.logout();
}

get f(){
  return this.loginForm.controls;
}

login(){
  if(this.loginForm.invalid){
    return;
  }else{
    if(this.f.username.value == this.model.username && this.f.password.value == this.model.password){
      alert("You have successfully login!");
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this.f.username.value);
      this.router.navigate([this.returnUrl]);
    }else{
      alert("Wrong username or password");
    }
  }
}
}
