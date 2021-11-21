import { Injectable } from '@angular/core';
import { EndPoint } from '../../model/endpoint';

@Injectable({
  providedIn: 'root'
})
export class FakeEndpointService {


  GetAll(): Promise<EndPoint[]>  {


      let endPoints:EndPoint[] =[];
    var google: EndPoint =  {
      _id: "1",
      name: "google",
      url: "www.google.com",
      snapshots: []
    };
    var yahoo: EndPoint =  {
      _id: "2",
      name: "Yahoo",
      url: "yahoo.com",
      snapshots: []
    }
    endPoints.push(google);
    endPoints.push(yahoo);
    return new Promise((res) => res(endPoints));
  };

}

