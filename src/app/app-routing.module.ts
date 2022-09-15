import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDetailsComponent } from './get-details/get-details.component';

const routes: Routes = [
  { path:'details', component:GetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
