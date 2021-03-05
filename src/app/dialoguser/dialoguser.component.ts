import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialoguser',
  templateUrl: './dialoguser.component.html',
  styleUrls: ['./dialoguser.component.css']
})
export class DialoguserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{name:String,email:String,phone:String,gender:String,age:number}) { }

  ngOnInit(): void {
  }

}
