import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// let runtime = require('serviceworker-webpack-plugin/lib/runtime');
// let registerEvents = require('serviceworker-webpack-plugin/lib/browser/registerEvents');

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
//   const registration = runtime.register();
//
//   registerEvents(registration, {
//     onInstalled: () => {
//       console.log('[SW] onInstalled');
//     },
//     onUpdateReady: () => {
//       console.log('[SW] onUpdateReady');
//     },
//
//     onUpdating: () => {
//       console.log('[SW] onUpdating');
//     },
//     onUpdateFailed: () => {
//       console.log('[SW] onUpdateFailed');
//     },
//     onUpdated: () => {
//       console.log('[SW] onUpdated');
//     },
//   });
//
// } else {
//   console.log('serviceWorker not available');
// }
