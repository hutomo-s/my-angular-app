import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DietRoutineComponent } from './diet-routine/diet-routine.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CourierComponent } from './courier/courier.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DietRoutineComponent,
    CalculatorComponent,
    CourierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
