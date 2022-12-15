import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
  path: 'calculadora/:id1/:id2', component: CalculatorPageComponent
  },
  {
    path: '**', component: HomeComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularMaterialModule

  ],

  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
