import { Component, OnInit } from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  constructor(private service:TodoService) { }

  List:any=[];

  ModalTitle:any;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;


  ngOnInit(): void {
    this.refreshList();
  }

  addClick(){
    this.emp={
      HomeId:0,
      Details:""
    }
    this.ModalTitle="Add Details";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item:any){
    this.emp=item;
    this.ModalTitle="Edit Details";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.removeDetails(item.HomeId).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshList();
  }


  refreshList(){
    this.service.getAllHomeId().subscribe(data=>{
      this.List=data;
    });
  }

}
