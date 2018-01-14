import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AlbumSearchService } from './album-search.service';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './header/header.component';
import { SavedAlbumsComponent } from './saved-albums/saved-albums.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    SavedAlbumsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  AlbumSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
