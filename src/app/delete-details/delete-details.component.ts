import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap,catchError } from 'rxjs';


interface int {
  data: string;
  msg: string;
  total: number;
}


@Component({
  selector: 'app-delete-details',
  templateUrl: './delete-details.component.html',
  styleUrls: ['./delete-details.component.css']
})
export class DeleteDetailsComponent implements OnInit {

  w:any;
  
  
  deleteUrl = 'https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Del';
  a:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void { }

  deleteForm = new FormGroup({

      token:new FormControl('A12F7A58-842D-4111-A44D-5F8C4E1AA521',[Validators.required]),
      DevId:new FormControl('3',[Validators.required])
  })

  deleteDetails()
  {
    console.log(123)
      let c
      c = this.deleteForm.value;
      // this.a = JSON.stringify(c);
      console.log(c)
      this.deleteData(c);
  }
  
  deleteData(a:any)
  {
    console.log(a)
    // let pay = 
    // {
    //   payload : a
    // }

    return this.http.post(this.deleteUrl,a).pipe(tap((res:any)=>
    {
      console.log(res);
    }
    )
    ).subscribe((r:int)=>{
      console.log('deleted detail')
      console.log(r.data);
    })
  }


}
