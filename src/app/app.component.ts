import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'view';

  constructor(private http: HttpClient ) {
  }
  ngOnInit() {
    // this.http.get('http://localhost:3000/users')
    //   .subscribe( response => {
    //     console.log('response', response)
      //})
  }
}
