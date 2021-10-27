import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EndPoint } from 'src/model/endpoint';

@Component({
  selector: 'add-endpoint',
  templateUrl: './add-endpoint.component.html',
  styleUrls: ['./add-endpoint.component.scss']
})
export class AddEndpointComponent implements OnInit {

  @Output() OnAdd:EventEmitter<EndPoint> =new EventEmitter<EndPoint>();

  endPointForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required)
  })


  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    let endpoint = this.endPointForm.value;
    this.OnAdd.emit(endpoint);
    console.log(endpoint);
  }
}
