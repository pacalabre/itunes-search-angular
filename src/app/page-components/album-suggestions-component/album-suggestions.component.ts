import { Component } from '@angular/core';
import { AlbumSearchService } from '../../album-search.service';


@Component({
  selector: 'app-album-suggestions-component',
  templateUrl: './album-suggestions.component.html',
  styleUrls: ['./album-suggestions.component.css']
})
export class AlbumSuggestionsComponent {
  albums;
  suggestedAlbums = true;

  constructor( private service: AlbumSearchService ) {
  	this.service.getSavedAlbums();
  	this.albums = this.service.savedAlbums;
   }

}
