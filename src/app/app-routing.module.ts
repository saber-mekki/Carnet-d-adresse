import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdressComponent } from './adress/adress.component';
import { CarnetComponent } from './carnet/carnet.component';


const routes: Routes = [
  {path:"",component:AdressComponent},
  {path:"carnet",component:CarnetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
