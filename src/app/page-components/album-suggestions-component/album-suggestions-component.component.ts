import { Component } from '@angular/core';
import { AlbumSearchService } from '../../album-search.service';


@Component({
  selector: 'app-album-suggestions-component',
  templateUrl: './album-suggestions-component.component.html',
  styleUrls: ['./album-suggestions-component.component.css']
})
export class AlbumSuggestionsComponentComponent {
  albums;

  constructor( private service: AlbumSearchService ) {
  	this.service.getSavedAlbums();
  	this.albums = this.service.savedAlbums;
  	console.log("this albums are: " + this.albums);
   }

   // filterAlbums(event) {
   // 	this.filterTerm = event.target.value;
   // }


}
