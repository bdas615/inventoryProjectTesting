import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatestAll, forkJoin, tap } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-get-all-data',
  templateUrl: './get-all-data.component.html',
  styleUrls: ['./get-all-data.component.css']
})
export class GetAllDataComponent implements OnInit {

  a:any;
  b:any;
  c:any;
  getAllDataURL = 'https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_GetAll';

  constructor(private http:HttpClient) { }

  ngOnInit(): void { }

  formFetch = new FormGroup({

    token:new FormControl('A12F7A58-842D-4111-A44D-5F8C4E1AA521')
    
  })

  fetchData()
  {
    this.a = this.formFetch.value;
    this.getValues(this.a);
  }

  getValues(c:any)
  {
    return this.http.post(this.getAllDataURL,c).pipe(tap((r:any)=>{

    }
    )
    ).subscribe((a:any)=>{
        this.b = a.data;
        // console.log(this.b)
        
        this.c = JSON.parse(this.b)
        console.log(this.c)
        
       
    })
  }
}

 


