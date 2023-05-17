import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {environment} from "../../../environments/environment";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: environment.applicationDescription
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
