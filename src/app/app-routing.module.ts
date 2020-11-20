import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

// import { AuthGuard }            from './shared/auth/auth.guard.service';
// import { AuthGuard }            from './shared/auth/auth.guard';
// import { AnonymousGuard }       from './shared/auth/anonymous.guard';

import { HomeComponent }           from './home/home.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { EditComponent }        from "./edit/edit.component";
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { AboutComponent }          from './about/about.component';
import {SignupComponent}           from "./signup/signup.component";
import {LoginComponent}            from "./login/login.component";
import {UploadComponent}           from "./upload/upload.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AnonymousGuard]
  },
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
    path: 'login',
    component: LoginComponent
    // canActivate: [AnonymousGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
    // canActivate: [AnonymousGuard]
  },
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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
