import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {


  addDev='https://tools.brandinstitute.com/wsInventory/wsInventory.asmx?op=Device_Add';
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  getPublicContent(): Observable<any> {

    let  TOKEN_KEY = `A12F7A58-842D-4111-A44D-5F8C4E1AA521`;
  
    return this.http.post(this.addDev,TOKEN_KEY, { responseType: 'text' });
  }

}
