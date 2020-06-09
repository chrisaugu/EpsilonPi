import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

// import { AuthGuard }            from './auth.guard';
// import { AnonymousGuard }       from './anonymous.guard';

import { HomeComponent }           from './home/home.component';
// import { LoginComponent }          from './login/login.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';
import { SearchComponent }         from "./search/search.component";
// import { EditComponent }        from "./edit/edit.component";
import { NowPlayingComponent }     from "./now-playing/now-playing.component";
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { AboutComponent }          from './about/about.component';
import { ArtistComponent }         from "./artist/artist.component";
import { AlbumsComponent }         from "./albums/albums.component";
// import { PlaylistsComponent }   from './playlists/playlists.component';
// import { TrackListComponent }   from "./tracks/tracks.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent/*, canActivate: [AnonymousGuard]*/},
  { path: 'welcome', redirectTo: 'welcome'/*, canActivate: [AnonymousGuard]*/},
  // {
  //   path: 'welcome',
  //   component: LoginComponent,
  //   canActivate: [AnonymousGuard]
  // },
  // { path: 'heroes',   redirectTo: '/superheroes', pathMatch: 'full' },
  // {
  //   path: 'compose',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //   canLoad: [AuthGuard]
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
  //   data: { preload: true }
  // },
  // { path: '/playlists', component: PlaylistsComponent },
  // { path: '/playlists/:playlistId', component: PlaylistsComponent },
  { path: 'about', component: AboutComponent/*, canActivate: [AuthGuard]*/},
  { path: 'artists', component: ArtistComponent/*, canActivate: [AuthGuard]*/},
  // {path: 'edit/:id', component: EditComponent/*, canActivate: [AuthGuard]*/},
  {path: 'search', component: SearchComponent/*, canActivate: [AuthGuard]*/},
  // {path: 'search', component: '/search', pathMatch: 'full'},
  // {path: 'search', redirectTo: '/search', pathMatch: 'full'},
  { path: 'albums', component: AlbumsComponent/*, canActivate: [AuthGuard]*/},
  {
    path: 'now_playing',
    component: NowPlayingComponent,
    resolve: {
      // data: NowPlayingResolver
    }
  },
  // {
  //   path: 'questions/about/:categorySlug',
  //   component: CategoryQuestionsComponent,
  //   resolve: {
  //     data: CategoryQuestionsResolver
  //   }
  // },
  // {
  //   path: 'question/:questionSlug',
  //   component: QuestionAnswersComponent,
  //   resolve: {
  //     data: QuestionAnswersResolver
  //   }
  // },
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'protected',
  //   component: ProtectedComponent,
  //   canActivate: [ LoggedInGuard ]
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'musics',
  //   component: TrackListComponent,
  //   data: { title: 'Heroes List' }
  // },
  {path: '**', component: PageNotFoundComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'welcome' , pathMatch: 'full' },
  
];

// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // <-- debugging purposes only
      { enableTracing: true },
      // preloadingStrategy: SelectivePreloadingStrategyService,
      // useHash: false,
      // enableTracing: true
    )
  ],
  exports: [RouterModule],
  providers: [
    // AuthGuard,
    // AnonymousGuard
  ]
})

export class AppRoutingModule { }
