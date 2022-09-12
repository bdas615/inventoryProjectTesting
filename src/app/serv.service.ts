import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }
  
  x:any;

  add="https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Get";

    A(){
      
      let x={
          "token":"A12F7A58-842D-4111-A44D-5F8C4E1AA521",
          "DevId":"3"
    }
   
      return this.http.post(this.add,x).pipe(tap((res:any)=>{
          console.log(res)
      }
      ),
      catchError((e:any)=>{
        console.log(e)
        return e;
      })
      

      )

  }

}
