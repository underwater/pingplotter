import { Component, OnInit } from '@angular/core';
import { EndPoint } from 'src/model/endpoint';
import { EndpointService } from '../_services/endpoint.service';
import { FakeEndpointService } from '../_services/fake-endpoint.service';

@Component({
  selector: 'list-endpoint',
  templateUrl: './list-endpoint.component.html',
  styleUrls: ['./list-endpoint.component.scss']
})
export class ListEndpointComponent implements OnInit {
  public EndPoints : EndPoint[] = [];


  constructor(private service : EndpointService) { }

  async ngOnInit() {


    this.EndPoints = await this.service.GetAll();


  }

  async AddEndPoint(endPoint: EndPoint){
    let newEndPoint = await this.service.Add(endPoint);
  }

}
