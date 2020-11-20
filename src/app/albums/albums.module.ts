import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {AlbumsComponent} from "./albums.component";

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumsComponent },
  { path: 'albums/:id/edit', component: AlbumsComponent }
]

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, AlbumsComponent],
  // providers: [AlbumServices]
})

export class AlbumsModule {}
