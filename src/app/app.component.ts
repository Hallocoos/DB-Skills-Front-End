import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'db-skills-front-end';

  constructor(public httpClient: HttpClient) {}

  sendGetRequest() {
    this.httpClient.get('http://localhost:5000/getAllEmployees/').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Completed.');
    });
  }

  httpPostExample() {
    this.httpClient.post('/courses/-KgVwECOnlc-LHb_B0cQ.json',
        {
            courseListIcon: 'qwer',
            description: 'qwer',
            iconUrl: '.asdf.',
            longDescription: '..asdf.',
            url: 'google.com'
        })
        .subscribe(
            (val) => {
                console.log('POST call successful value returned in body', 
                            val);
            },
            response => {
                console.log('POST call in error', response);
            },
            () => {
                console.log('The POST observable is now completed.');
            });
    }
}
