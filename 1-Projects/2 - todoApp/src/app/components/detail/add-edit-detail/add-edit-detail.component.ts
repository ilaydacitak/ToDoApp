import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-edit-detail',
  templateUrl: './add-edit-detail.component.html',
  styleUrls: ['./add-edit-detail.component.scss']
})
export class AddEditDetailComponent implements OnInit {

  constructor(private service:TodoService) { }

  @Input() emp:any;
   HomeId:any;
  Details:any;

  HomeIdList:any=[];

  ngOnInit(): void {
    this.loadHomeIdList();
  }

  loadHomeIdList(){
    this.service.getAllHomeId().subscribe((data:any)=>{
      console.log(data);
      this.HomeIdList=data;

      this.HomeId=this.emp.HomeId;
      this.Details=this.emp.Details;
    });
  }



  addDetails(){
    var value = {HomeId:this.HomeId,
      Details:this.Details};
    this.service.addDetails(value).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDetails(){
    var value = {HomeId:this.HomeId,
      Details:this.Details};
    this.service.updateDetails(value).subscribe(res=>{
    alert(res.toString());
    });
  }

}
