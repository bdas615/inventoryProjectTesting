import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { GetAllDataComponent } from './get-all-data/get-all-data.component';
import { GetDetailsComponent } from './get-details/get-details.component';

const routes: Routes = [
  { path:'get-details', component:GetDetailsComponent },
  { path:'add-details',component:AddDetailsComponent},
  { path:'delete-details', component:DeleteDetailsComponent},
  { path:'get-all-data',component:GetAllDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
