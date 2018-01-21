import { Component, Input } from '@angular/core';
import { AlbumSearchService } from '../album-search.service';

@Component({
  selector: 'savedAlbums',
  templateUrl: './saved-albums.component.html',
  styleUrls: ['./saved-albums.component.css']
})
export class SavedAlbumsComponent {

  constructor(private service: AlbumSearchService) { }
  savedAlbums;
  @Input('showSaved')showSaved = false;

  getSavedAlbums(){
    this.buttonClicked();
  	this.service.getSavedAlbums();
  	this.savedAlbums = this.service.savedAlbums;
  	console.log(this.savedAlbums);
  }

  buttonClicked() {
    console.log(this.showSaved);
    this.showSaved = !this.showSaved;
  }


}
