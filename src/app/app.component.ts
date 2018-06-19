import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    // moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Welcome to Search';
    link = 'http://10.102.8.101:3000/customer/';
    http: Http;
    searchApi:any[]=[];
    
    constructor(http: Http) {this.http = http; }

    performSearch(searchTerm: HTMLInputElement): void {
        var apiLink = this.link + searchTerm.value;
        // var apiLink = this.link;

        this.http.request(apiLink)
            .subscribe((res: Response) => {
                  this.searchApi.push(res.json());
                  console.log(this.searchApi);
            });
    } 
};