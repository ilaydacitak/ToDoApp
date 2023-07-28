import { Component, OnInit } from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:TodoService) { }

   List:any=[];

  ModalTitle: any;
  ActivateAddEditEmpComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshList();
  } 
 
  addClick(){
    this.dep={
      HomeId:0,
      HomeTitle:"",
      HomePriority:"",
      HomeCreatedDate:"",
    }
    this.ModalTitle="Add Todo";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.dep=item;
    this.ModalTitle="Edit Todo";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.removeTodo(item.HomeId).subscribe(data=>{
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
    this.service.getAllTodos().subscribe(data=>{
      this.List=data;
    });
  }

}

