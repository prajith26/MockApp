import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private fb:FormBuilder, private user:UserService, public router:Router){}

  registrationForm = this.fb.group({
    UserName:['',[Validators.required,Validators.maxLength(50)]],
    Email:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/)]],
    Phone:['',[Validators.required,Validators.pattern(/^[1-9]{1}[0-9]{9}$/)]],
    Gender:['',[Validators.required,Validators.pattern(/^[MFmf]{1}/),Validators.minLength(1)]],
    Age:['',[Validators.required,Validators.pattern(/^\d/)]]
  })
  
  get UserName(){
    return this.registrationForm.get('UserName');
  }
  get Email(){
    return this.registrationForm.get('Email');
  }
  get Phone(){
    return this.registrationForm.get('Phone');
  }
  get Gender(){
    return this.registrationForm.get('Gender');
  }
  get Age(){
    return this.registrationForm.get('Age');
  }

  ngOnInit(): void {
  }
  adduser(){
    console.log(this.registrationForm.value);
    this.user.addUser(this.registrationForm.value)
    .subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['']);
      });
  }
}
