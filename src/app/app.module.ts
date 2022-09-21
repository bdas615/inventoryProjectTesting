import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { GetDetailsComponent } from './get-details/get-details.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { GetAllDataComponent } from './get-all-data/get-all-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDetailsComponent,
    AddDetailsComponent,
    DeleteDetailsComponent,
    GetAllDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
