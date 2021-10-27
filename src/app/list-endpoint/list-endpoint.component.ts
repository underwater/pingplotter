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
    this.EndPoints.unshift(newEndPoint);//unshift-->  like push, except it adds elements to the beginning of the array instead of the end.
  }


 async Delete(endPoint: EndPoint){
    console.log(`deleting: ${endPoint.name}`);

    // delete on server
    let result = await this.service.Delete(endPoint);

    // why this delete isn't refreshing the list?
    // remove from client list
    debugger;
    this.EndPoints = this.EndPoints.filter(item => item._id !== endPoint._id);
  }

  async Edit(ep: EndPoint){
    console.log(`editing : ${ep.name}`);
  }

}
