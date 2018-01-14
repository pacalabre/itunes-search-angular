import { Component } from '@angular/core';
import { AlbumSearchService } from '../album-search.service';

@Component({
  selector: 'savedAlbums',
  templateUrl: './saved-albums.component.html',
  styleUrls: ['./saved-albums.component.css']
})
export class SavedAlbumsComponent {

  constructor(private service: AlbumSearchService) { }
  savedAlbums;

  getSavedAlbums(){
  	this.service.getSavedAlbums();
  	this.savedAlbums = this.service.savedAlbums;
  	console.log(this.savedAlbums);
  }


}
