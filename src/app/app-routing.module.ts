import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEndpointComponent } from './list-endpoint/list-endpoint.component';

const routes: Routes = [
  {path: "endpoints", component: ListEndpointComponent},
  { path: "**", component: ListEndpointComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
