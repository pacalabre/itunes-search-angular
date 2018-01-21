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
  recentSearches=[];


  constructor(private service: AlbumSearchService) {}
  getInput(event) {
    console.log(this.searchTerm);
  }

  addToSaved(event){
    let artist = event.target.attributes[2].nodeValue;
    let album = event.target.attributes[3].nodeValue;
    let artwork = event.target.attributes[4].nodeValue;
    console.log(event.target.attributes);
    this.service.saveAlbum(artist, album, artwork);
  }

  makeRequest(event) {
    event.preventDefault();
    this.searchTerm = event.target[0].value;
    console.log("recentSearches are "+ this.recentSearches);
    if(this.searchTerm) {
      this.recentSearches.push(this.searchTerm);
      this.service.getAlbums(this.searchTerm)
      .subscribe( (data) => {
         this.results = data;
         this.albums =  this.results.results;
           console.log(this.albums);
      })
    }

  }


}