import { Component, OnInit } from '@angular/core';
import { EndPoint } from 'src/model/endpoint';

@Component({
  selector: 'add-endpoint',
  templateUrl: './add-endpoint.component.html',
  styleUrls: ['./add-endpoint.component.scss']
})
export class AddEndpointComponent implements OnInit {
  title = 'ping-plotter';
  model = new EndPoint('google', 'www.google.com');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("clicked");
  }
}
