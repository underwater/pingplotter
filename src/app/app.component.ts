import { Component } from '@angular/core';
import { EndPoint } from 'src/model/endpoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ping-plotter';
  model = new EndPoint('google', 'www.google.com');

  onSubmit() {
    console.log("clicked");
  }
}
