import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumSearchService {

  constructor(private http: HttpClient) { }
   private url = 'https://itunes.apple.com/search?term=';
   searchTerm: any;

  getAlbums(searchTerm) {
  	return this.http.get( this.url + searchTerm + '&entity=album');
  }

}
