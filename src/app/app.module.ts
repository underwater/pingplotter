import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEndpointComponent } from './list-endpoint/list-endpoint.component';
import { AddEndpointComponent } from './add-endpoint/add-endpoint.component';
import { BootstrapButtonDirective } from './bootstrap-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListEndpointComponent,
    AddEndpointComponent,
    BootstrapButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
