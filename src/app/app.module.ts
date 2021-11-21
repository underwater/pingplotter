import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEndpointComponent } from './list-endpoint/list-endpoint.component';
import { AddEndpointComponent } from './add-endpoint/add-endpoint.component';
import { BootstrapButtonDirective } from './bootstrap-button.directive';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnapshotsChartComponent } from './snapshots-chart/snapshots-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    ListEndpointComponent,
    AddEndpointComponent,
    BootstrapButtonDirective,
    ChartComponent,
    SnapshotsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule {

}
