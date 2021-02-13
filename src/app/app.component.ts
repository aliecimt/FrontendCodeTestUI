import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngAppCodeTest';
  name="";
  output="";
  apiURL = 'http://localhost:52539/';
  constructor(private http: HttpClient) { }
  
  clickFunction(id:string) {
    let resr= this.http.get(this.apiURL + '/CodeTest/GetProductById?id=' + id, {responseType: 'text'})
    resr.subscribe(data => {
    
      console.log(data);
      if(data=="MILK")
      {
        this.output= "READY TO MIX"
      }else if(data=="ORANGE")
      {
        this.output= "READY TO MIX"
      }else{
        this.output= "CANNOT MIX IT"
      }
      this.name = data;
     
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  }
  Mix(el: { getAttribute: (arg0: string) => any; }) {
    let messageId = el.getAttribute('data-message-id');
    if(messageId=="MILK")
    {
      this.output= "MILK SHAKE"
    }else if(messageId=="ORANGE")
    {
      this.output= "ORANJE JUICE"
    }else{
      this.output= "CANNOT MIX IT"
    }
   
}
}
