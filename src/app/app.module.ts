import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// import { Router } from '@angular/router';
// import { AlertModule } from 'ng2-bootstrap';
// import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { AudioPlayerComponent } from './audio-player/audio-player.component';
// import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
// import { SearchBarComponent } from './shared/components/search/search.component';
import {UploadComponent} from "./upload/upload.component";

// import { SearchService, AppService, UserService, MyNewPipePipe } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { TracksModule } from "./tracks/tracks.module";
import { ArtistsModule } from "./artists/artists.module";
// import { SearchModule } from "./search/search.module";
import { PlaylistsModule } from "./playlists/playlists.module";
import { RadioModule } from "./radio/radio.module";
import { NowPlayingModule } from "./now-playing/now-playing.module";
import { AlbumsModule } from "./albums/albums.module";
// import { ChartsModule } from "./charts/charts.module";
import { DashboardModule } from './dashboard/dashboard.module';
import {AppLoadingComponent} from "./shared/components/app-loading.component";

// import { AuthGuard } from "./shared/auth/auth.guard.service";
// import { AuthGuard } from "./shared/auth/auth.guard";
// import { AuthModule } from './shared/auth/auth.module';

// export function getAuthHttp(http: HttpModule) {
//   return new AuthHttp(new AuthConfig({
//     headerName: 'x-auth-token',
//     noTokenScheme: true,
//     noJwtError: true,
//     globalHeaders: [{'Accept': 'application/json'}],
//     tokenGetter: (() => localStorage.getItem('id_token')),
//   }), http);
// }
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    AboutComponent,
    // AudioPlayerComponent,
    UploadComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    SidenavComponent,
    AppLoadingComponent,
    // ComposeMessageComponent,
    // EditComponent,
    // MyNewPipePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    // AuthModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    // AlertModule.forRoot(),
    // MatSliderModule,
    MatSidenavModule,
    // MatChipsModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,

    // ChartsModule,
    AlbumsModule,
    RadioModule,
    TracksModule,
    ArtistsModule,
    // SearchModule,
    NowPlayingModule,
    PlaylistsModule,
    DashboardModule,
    AppRoutingModule
  ],
  entryComponents: [],
  providers: [
    // AuthGuard
    // AppService,
    // SearchService,
    // CategoriesService,
    // QuestionsService,
    // AnswersService,
    // CategoryQuestionsResolver,
    // CategoriesResolver,
    // QuestionAnswersResolver,
    // UserService,
    // {
    //   provide: AuthHttp,
    //   useFactory: getAuthHttp,
    //   deps: [Http]
    // }
    // {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   // Use a custom replacer to display function names in the route configs
  //   const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
  //
  //   console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  // }
}
