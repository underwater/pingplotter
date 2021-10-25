import { Injectable } from '@angular/core';
import { EndPoint } from '../../model/endpoint';

@Injectable({
  providedIn: 'root'
})
export class FakeEndpointService {


  GetAll(): Promise<EndPoint[]>  {


      let endPoints:EndPoint[] =[];
    var google =  new EndPoint(1, 'google', 'www.google.com');
    var yahoo =  new EndPoint(1, 'yahoo', 'www.yahoo.com');
    endPoints.push(google);
    endPoints.push(yahoo);
    return new Promise((res) => res(endPoints));
  };

}

