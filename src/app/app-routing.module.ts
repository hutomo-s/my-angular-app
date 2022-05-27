import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DietRoutineComponent } from './diet-routine/diet-routine.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CourierComponent } from './courier/courier.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'diet-routine', component: DietRoutineComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'courier', component: CourierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
