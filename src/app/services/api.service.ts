import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  title = 'AngAppCodeTest';
  apiURL = 'http://localhost:52539';
  constructor(private http: HttpClient) { }

  clickFunction(title:string) {
    return this.http.get(this.apiURL + '/CodeTest/GetProductById?' + title)
    .subscribe(data => {
      console.log(data);
    });
  }



//   get(id) {
//     return this.http.get(`${baseUrl}/${id}`);
//   }

//   create(data) {
//     return this.http.post(baseUrl, data);
//   }

//   update(id, data) {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }

//   delete(id) {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }

//   deleteAll() {
//     return this.http.delete(baseUrl);
//   }

//   findByTitle(title) {
//     return this.http.get(`${baseUrl}?title=${title}`);
//   }
 }