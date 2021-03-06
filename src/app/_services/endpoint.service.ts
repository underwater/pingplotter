import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EndPoint } from '../../model/endpoint';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  Delete(endPoint: EndPoint) : Promise<object> {
    let URL = `http://localhost:3000/api/endpoints`;
    let result = this.http.delete(`${URL}/${endPoint._id}`).toPromise();
    return result;

  }
  Add(endPoint: EndPoint) : Promise<EndPoint> {
    let URL = `http://localhost:3000/api/endpoints`;
    let result = this.http.post<EndPoint>(URL, endPoint).toPromise();
    console.log(`result of POST method: ${result}`);
    return result;
  }
constructor(private http: HttpClient){

}

  async GetAll(): Promise<EndPoint[]>  {
    let URL = `http://localhost:3000/api/endpoints`;
    let result = await this.http.get<EndPoint[]>(URL).toPromise();
    console.log(`result of GET method: ${result}`);
    return result;
  };

}

