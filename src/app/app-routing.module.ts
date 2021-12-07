import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

// import { AuthGuard }            from './shared/auth/auth.guard.service';
// import { AuthGuard }            from './shared/auth/auth.guard';
// import { AnonymousGuard }       from './shared/auth/anonymous.guard';

// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { EditComponent }        from "./edit/edit.component";
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { AboutComponent }          from './about/about.component';
import { UploadComponent }         from "./upload/upload.component";

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: TrackListComponent,
  //   // canActivate: [AnonymousGuard]
  // },
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
  {
    path: 'about',
    component: AboutComponent,
    // canActivate: [AuthGuard]
  },
  // { path: 'edit/:id', component: EditComponent/*, canActivate: [AuthGuard]*/ },
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
  {
    path: 'upload',
    component: UploadComponent
  },
  // {
  //   path: 'protected',
  //   component: ProtectedComponent,
  //   canActivate: [ LoggedInGuard ]
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   // canActivate: [AuthGuard]
  // },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
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
