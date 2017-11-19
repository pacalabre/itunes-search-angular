import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  searchTerm: any;
  albums: any;

  constructor(private httpClient: HttpClient) {}
  getInput(event) {
  	this.searchTerm = event.target.value;
  }

  makeRequest() {
  	this.httpClient.get('https://itunes.apple.com/search?term=' + this.searchTerm + '&entity=album')
  	.subscribe( (data) => {
  		 this.albums = data;
  		 console.log(this.albums);
  	})

  }


}
