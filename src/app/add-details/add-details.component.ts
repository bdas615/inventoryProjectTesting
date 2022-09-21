import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, tap } from 'rxjs';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  
  b:any;
  a:any;
  addDev='https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Get';

  constructor(private http:HttpClient,private serv:ServService) { }

  ngOnInit(){ }

  formInput = new FormGroup({
    token:new FormControl('A12F7A58-842D-4111-A44D-5F8C4E1AA521',[Validators.required]),
    DevId:new FormControl('',[Validators.required])
  })

  content()
  {
    let c;
    c = this.formInput.value;
    console.log(c)
    this.callContentValue(c);
  }

  callContentValue(c:any)
  {
    return this.http.post<any>(this.addDev,c).pipe(tap((r:any)=>
    {
    }
    )
    ,catchError((e:any)=>{
      return e;
    }
    )
    )
    .subscribe((w:any)=>
    {
      this.a = w.data;
      this.b = JSON.parse(this.a)
      console.log(w.data);
    })
  }

  
}
