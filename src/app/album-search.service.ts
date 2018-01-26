import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumSearchService {

  constructor(private http: HttpClient) { }
   private url = 'https://itunes.apple.com/search?term=';
   searchTerm: any;
   savedAlbums = [];

  getAlbums(searchTerm) {
    console.log(this.http.get( this.url + searchTerm ));
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

