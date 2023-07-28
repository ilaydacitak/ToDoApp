import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:TodoService) { }

  @Input() dep:any;
  HomeId:any;
  HomeTitle:any;
  HomePriority:any;
  HomeCreatedDate:any;


  List:any=[];

  ngOnInit(): void {
    this.HomeId=this.dep.HomeId;
    this.HomeTitle=this.dep.HomeTitle;
    this.HomePriority=this.dep.HomePriority;
    this.HomeCreatedDate=this.dep.HomeCreatedDate;
    
  }

  

  getAllTodos(){
    this.service.getAllTodos().subscribe((data:any)=>{
      this.List=data;

      this.HomeId=this.dep.HomeId;
      this.HomeTitle=this.dep.HomeTitle;
      this.HomePriority=this.dep.HomePriority;
      this.HomeCreatedDate=this.dep.HomeCreatedDate;

    });
  }

  addTodo(){
    var val = {HomeId:this.HomeId,
                HomeTitle:this.HomeTitle,
                HomePriority:this.HomePriority,
                HomeCreatedDate:this.HomeCreatedDate,};

    this.service.addTodo(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTodo(){
    var val = {HomeId:this.HomeId,
      HomeTitle:this.HomeTitle,
      HomePriority:this.HomePriority,
      HomeCreatedDate:this.HomeCreatedDate,};

    this.service.updateTodo(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
