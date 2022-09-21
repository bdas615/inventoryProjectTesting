import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, forkJoin, tap } from 'rxjs';
import { ServService } from '../serv.service';

interface t
{
  token: any,
      DevType: any
      DevTypeOther: any
      Make: any
      Model: any
      Owner: any
      Location: any
      Serial: any
      PurchaseDate: any
      WarrantyExpDate: any
      ServiceExpDate: any
      Value: any
      Size: any
      Toner: any
      MacAddress: any
      IPAddress: any
      CellNumber:any
}

export class devData {
  token!: string;
  DevType!: string
  DevTypeOther!: string;
  Make!: string;
  Model!: string;
  Owner!: string;
  Location!: string;
  Serial!: string;
  PurchaseDate!: string;
  WarrantyExpDate!: string;
  ServiceExpDate!: string;
  Value!: string;
  Size: any;
  Toner: any;
  MacAddress!: string;
  IPAddress!: string;
  CellNumber!: string;
}

interface int {
  data: string;
  msg: string;
  total: number;
}

interface xx {
  data: [];
  msg: string;
  total: number;
}

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})

export class GetDetailsComponent implements OnInit {

  sw:any;
  sww!:t;
  x!: int;
  y!: xx;
  z!: devData;
  a: any;
  b: any;
  c: any;
  Laptop_Desktop: any;
  Misc: any;
  Mobile_Phone: any;
  Monitor: any;
  Polycrom: any;
  Printer: any;
  Server: any;

  entryForm!: FormGroup;

  constructor(private serv: ServService, private http: HttpClient) { }

  ngOnInit(): void {

    this.entryForm = new FormGroup({

      token: new FormControl("A12F7A58-842D-4111-A44D-5F8C4E1AA521"),
      DevType: new FormControl(''),
      DevTypeOther: new FormControl(''),
      Make: new FormControl(''),
      Model: new FormControl(''),
      Owner: new FormControl(''),
      Location: new FormControl(''),
      Serial: new FormControl(''),
      PurchaseDate: new FormControl(''),
      WarrantyExpDate: new FormControl(''),
      ServiceExpDate: new FormControl(''),
      Value: new FormControl(''),
      Size: new FormControl(''),
      Toner: new FormControl(''),
      MacAddress: new FormControl(''),
      IPAddress: new FormControl(''),
      CellNumber: new FormControl('')
    })

    //   this.serv.mainApi().subscribe((res:int)=>
    //   {
    //   this.y = JSON.parse(res.data);
    //   this.a = this.y;
    //   console.log(this.a);  
    // })
  }
  
 formSubmit() 
  {
    this.sww = this.entryForm.value;

    this.formSubmitData(this.sww);

  }
    
  formSubmitData(w:any){
   
    this.http
      .post('https://tools.brandinstitute.com/wsInventory/wsInventory.asmx/Device_Add',
      w).pipe(
        tap(data => {
        console.log(data)
        })
        ).subscribe((r:any)=>
        {
          console.log(r.data);
        })
    
  }
}
