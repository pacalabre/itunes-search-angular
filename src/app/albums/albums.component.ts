import { AlbumSearchService } from '../album-search.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  searchTerm: string;
  results: any;
  albums = [];

  constructor(private service: AlbumSearchService) {}
  getInput(event) {
    console.log(this.searchTerm);
  }

  addToSaved(event){
    console.log("saved");
  }

  makeRequest(event) {
    event.preventDefault();
    this.searchTerm = event.target[0].value;
    console.log("searchTerm = "+ this.searchTerm);
    this.service.getAlbums(this.searchTerm)
    .subscribe( (data) => {
       this.results = data;
       this.albums =  this.results.results;
         console.log(this.albums);
    })

  }

}