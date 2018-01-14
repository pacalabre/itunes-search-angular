import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumSearchService {

  constructor(private http: HttpClient) { }
   private url = 'https://itunes.apple.com/search?term=';
   searchTerm: any;
   savedAlbums = [];

  getAlbums(searchTerm) {
  	return this.http.get( this.url + searchTerm + '&entity=album');
  }

  saveAlbum(artist, album, artwork){
  	// console.log(artist, album, artwork);
  	this.savedAlbums.push({artistName: artist, collectionName: album, artworkUrl100: artwork});
  	console.log(this.savedAlbums);

  }

  getSavedAlbums() {

  	return this.savedAlbums;
  }

}

/*
 Trying to figure out how to deal with state. Do I make the HTTP request in the parent app
 like I did in the React version? Right now I am trying to store the values in a service
 that can be accessed by either the albums or saved albums component. I am storing the 
 info in individual data-attributes since I was having trouble accessing the value when
 storing the value in a button as value = {{ album }}. Is there a better way to do this?
*/
