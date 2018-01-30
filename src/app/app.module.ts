import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlbumSearchService } from './album-search.service';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './header/header.component';
import { SavedAlbumsComponent } from './saved-albums/saved-albums.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './page-components/home-component/home.component';
import { AlbumSuggestionsComponent } from './page-components/album-suggestions-component/album-suggestions.component';
import { NotFoundComponent } from './page-components/not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NewReleasesComponent } from './page-components/new-releases/new-releases.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    SavedAlbumsComponent,
    PostsComponent,
    HomeComponent,
    AlbumSuggestionsComponent,
    NotFoundComponent,
    NavbarComponent,
    FilterPipe,
    NewReleasesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path:'', component:HomeComponent },
     { path:'suggested-albums', component:AlbumSuggestionsComponent },
     { path: 'new-releases', component: NewReleasesComponent },
     { path:'**', component: NotFoundComponent }

    ])
  ],
  providers: [
  AlbumSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
