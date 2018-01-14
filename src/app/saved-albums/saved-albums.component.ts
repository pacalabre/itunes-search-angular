import { Component } from '@angular/core';
import { AlbumSearchService } from '../album-search.service';

@Component({
  selector: 'savedAlbums',
  templateUrl: './saved-albums.component.html',
  styleUrls: ['./saved-albums.component.css']
})
export class SavedAlbumsComponent {

  constructor(private service: AlbumSearchService) { }

  getSavedAlbums(){
  	this.service.getSavedAlbums();
  }


}
