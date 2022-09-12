import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ServService } from './serv.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs';
import { Token } from '@angular/compiler';

interface Aa
{
  data:[];
  msg:string;
  total:number;
}

interface response
{
  data:string;
  msg:string;
  total:number; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'practice';
  b:any;
  form!:FormGroup;
  x!:Aa;
  y:any;
  a!:{data:null,msg:null,total:null};
  formBuilder: FormGroup<any> | undefined;

  add="https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Get";

  constructor(private serv:ServService,private http:HttpClient){}

  ngOnInit()
  {
    // this.A().subscribe((res:response)=>{
    //   this.x = JSON.parse(res.data);
    //    console.log(this.x);
    // })
  }

  userLogin=new FormGroup({
    token:new FormControl('',[Validators.required]),
    DevId:new FormControl('',[Validators.required]),
   })

   fun()
   {
   
    let c;
    console.log(this.userLogin.value);
    c = this.userLogin.value;
    this.A(c);
    // c = JSON.stringify(this.b);
    // console.log(c)

    // delay(1000)
    // {
    //   this.A(c);
    // };

    
    // this.A().subscribe((res:response)=>{
    //   this.x = JSON.parse(res.data);
    //    console.log(this.x);
    // })
  // }
   }

    A(c:any)
    {
      c = JSON.stringify(c);
      return this.http.post<any>(this.add,c).pipe(tap((res:any)=>
      {
        console.log(res)
      }

      ),
      catchError((e:any)=>{
        console.log(e)
        return e;
      })
      )
      .subscribe((r:any)=>{
        this.x = JSON.parse(r);
       console.log(this.x);
      })
  }
  


}
