import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { /*HttpModule,*/ LocationStrategy, PathLocationStrategy } from '@angular/common';

// import { AlertModule } from 'ng2-bootstrap';
// import { AuthHttp, AuthConfig } from 'angular2-jwt';
// import { MatSliderModule } from '@angular/material/slider';

// import { Router } from '@angular/router';
// import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
// import { EditComponent } from './edit/edit.component';
// import { RadioComponent } from './radio/radio.component';
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AlbumsComponent } from './albums/albums.component';

import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";

// import { SearchService, AppService, UserService, MyNewPipePipe } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { TracksModule } from "./tracks/tracks.module";
import { SearchModule } from "./search/search.module";
import { PlaylistsModule, } from "./playlists/playlists.module";
import {RadioModule} from "./radio/radio.module";
import {ChartsModule} from "./charts/charts.module";
// import {AuthGuard} from "./auth.guard";

// import { AuthModule } from './auth/auth.module';

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
    HomeComponent,
    AboutComponent,
    AudioPlayerComponent,
    SearchComponent,
    // EditComponent,
    // MyNewPipePipe,
    // RadioComponent,
    ArtistComponent,
    // LoginComponent,
    // DashboardComponent,
    // ComposeMessageComponent,
    NowPlayingComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    SidenavComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // AuthModule,
    // HttpModule,
    // AlertModule.forRoot(),
    // MatSliderModule,
    ChartsModule,
    RadioModule,
    TracksModule,
    SearchModule,
    PlaylistsModule,
    AppRoutingModule
  ],
  entryComponents: [],
  providers: [
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
    {provide: LocationStrategy, useClass: PathLocationStrategy}
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
