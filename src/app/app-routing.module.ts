import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnnonceComponent} from "./annonce/annonce.component";

const routes: Routes = [
  { path: 'annoncelist', component: AnnonceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
