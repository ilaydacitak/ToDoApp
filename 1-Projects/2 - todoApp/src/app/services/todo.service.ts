import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(
    private http: HttpClient
  ) { }

  addTodo(val:any){
    return this.http.post("http://localhost:5263/api/Home", val);
    
  }

  getAllTodos():Observable<any>{
    return this.http.get("https://localhost:7283/api/Home/GET");
  }

  updateTodo(obj:any){
    return this.http.put("http://localhost:5263/api/Home", obj)
  }

  removeTodo(id:any){
    return this.http.delete("http://localhost:5263/api/Home/"+ id)
  }

  addDetails(obj:any){
    return this.http.post("http://localhost:5263/api/Detail", obj);
    
  }

  getAllDetails():Observable<any>{
    return this.http.get<any>("http://localhost:5263/api/Detail");
  }

  updateDetails(obj:any){
    return this.http.put("http://localhost:5263/api/Detail", obj)
  }

  removeDetails(id:any){
    return this.http.delete("http://localhost:5263/api/Detail/"+ id)
  }

 getAllHomeId(){
     return this.http.get("https://localhost:7283/api/Detail")
   }

  //  getList(){
  //    return this.http.get("...........................")
  //  }


}

