import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  searchTerm: string;
  results: any;
  albums = [];

  constructor(private httpClient: HttpClient) {}
  getInput(event) {
  	console.log(this.searchTerm);
  }

  addToSaved(event){
    console.log("saved");
  }

  makeRequest(event) {
  	event.preventDefault();
  	console.log(event);
  	this.searchTerm = event.target[0].value;
  	this.httpClient.get('https://itunes.apple.com/search?term=' + this.searchTerm + '&entity=album')
  	.subscribe( (data) => {
  		 this.results = data;
  		 this.albums =  this.results.results;
  	     console.log(this.albums);
  	})

  }

}
