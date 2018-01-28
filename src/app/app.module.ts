import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlbumSearchService } from './album-search.service';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './header/header.component';
import { SavedAlbumsComponent } from './saved-albums/saved-albums.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponentComponent } from './page-components/home-component/home-component.component';
import { AlbumSuggestionsComponentComponent } from './page-components/album-suggestions-component/album-suggestions-component.component';
import { NotFoundComponent } from './page-components/not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    SavedAlbumsComponent,
    PostsComponent,
    HomeComponentComponent,
    AlbumSuggestionsComponentComponent,
    NotFoundComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path:'', component:HomeComponentComponent },
     { path:'suggested-albums', component:AlbumSuggestionsComponentComponent },
     { path:'**', component: NotFoundComponent }

    ])
  ],
  providers: [
  AlbumSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
