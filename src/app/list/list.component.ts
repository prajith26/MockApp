import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialoguserComponent } from '../dialoguser/dialoguser.component';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ELEMENT_DATA:UserModel[]=[];
  displayedColumns: string[] = ['SlNo.','UserName','Email','Phone','Gender','Age','Delete'];
  dataSource = new MatTableDataSource<UserModel>(this.ELEMENT_DATA)
  filtersLoaded: Promise<boolean>;

  constructor(private user:UserService, private dialog:MatDialog) { }

  ngOnInit() {
   this.displayUser();  
  }

  displayUser(){
    this.user.getUser()
    .subscribe((list)=>{
      this.dataSource.data= list as UserModel[];
      this.filtersLoaded = Promise.resolve(true); 
      console.log(this.dataSource.data);
    })    
  }

  deleteUser(element){
    // console.log(element.id);
    let msg = confirm("Are you sure you want to delete the user");
    if(msg==true){
      this.user.deleteUser(element.id)
      .subscribe(data=>{
        console.log(data);
        alert("User Deleted")
        window.location.reload();
      })
    }
    
  }

  singleUser(element){
    this.user.singleUser(element.id)
    .subscribe(data=>{

    })
  }

  openDialog(element){
    this.dialog.open(DialoguserComponent,{
      data:{
        name:element.userName,
        email:element.email,
        phone:element.phone,
        gender:element.gender,
        age:element.age
      }
    })
  }
}
