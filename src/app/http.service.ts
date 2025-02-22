import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from './interfaces/employee';

const url = 'https://testapp.touchworldtechnology.com/interview/test/v1/product/users'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient);

  getEmployee(count = 15){
    return this.http.get<Employee[]>(`${url}?count=${count}`)
  }

  addEmployee(data:any){
    return this.http.post(`${url}`,data)
  }

}
