import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  {path:'ProductTable',component:ProductTableComponent},
  {path:'ProductForm',component:ProductFormComponent},
  {path:'BarChart',component:BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
