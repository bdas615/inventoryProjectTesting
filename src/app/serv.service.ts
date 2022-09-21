import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

const TOKEN_KEY = `A12F7A58-842D-4111-A44D-5F8C4E1AA521`;

@Injectable({
  providedIn: 'root'
})  
export class ServService {

  constructor(private http:HttpClient) { }

  
  z:any;
  x:any;

  mainUrl='https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/DeviceType_List';

  addGet="https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Get";

  addDev='https://tools.brandinstitute.com/wsInventory/wsInventory.asmx?op=Device_Add';
  
    mainApi()
    {
      let x = { "token":`A12F7A58-842D-4111-A44D-5F8C4E1AA521` }
      return this.http.post(this.mainUrl,x).pipe(tap((w:any)=>
      {
        console.log(w);
      }
      ),
      catchError((e:any)=>
      {
        return e;   
      }
      )
      )
    }

    A(){
      
      let x=
      {
          "token":"A12F7A58-842D-4111-A44D-5F8C4E1AA521",
          "DevId":""
      }
      return this.http.post<any>(this.addGet,x).pipe(tap((res:any)=>{
          console.log(res)
      }
      ),
      catchError((e:any)=>{
        console.log(e)
        return e;
      })
      )
  }

  
  getContent(){

    let x = 
    { 
      "token" : "A12F7A58-842D-4111-A44D-5F8C4E1AA521",
      "DevId" : "3"
    }

     return this.http.post<any>(this.addDev,x).pipe(tap((res:any)=>{
      console.log(res);
    }
    ),
    catchError((e:any)=>
    {
      console.log(e);
      return e;
    }
    )
    )
  }
}
