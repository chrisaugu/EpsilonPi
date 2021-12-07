import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
// import { Observable } from 'rxjs';
// import "rxjs/operators/debounceTime";
// import "rxjs/operators/filter";
// import 'rxjs/add/operator/distinctUntilChanged';
// import { OAuthService } from 'angular-oauth2-oidc';
import {SpotifyService} from "../shared/services/spotify.service";

class OAuthService {
  initImplicitFlow() {
    return this;
  }

  logOut() {
    return this;
  }

  getIdentityClaims() {
    return true;
  }
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SpotifyService]
})
export class HomeComponent implements OnInit{
  artists: Object = [];
  isLoading = true;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  // @ViewChild(Content) content: Content;

  // searchControl = new FormControl();

  constructor(private _spotifyService: SpotifyService) {
    // this.searchControl.valueChanges
    //   // .filter(text => text.length >= 3)
    //   // .debounceTime(400)
    //   // .distinctUntilChanged()
    //   .subscribe(value => {
    //     console.log(value);
    //   })
  }

  ngOnInit() {
    this._spotifyService.getSpotifyData()
      .subscribe(data => {
        this.isLoading = false;
        this.artists = data;
        console.log(this.artists)
      })
  }

  // constructor(private oauthService: OAuthService) {
  // }
  //
  // login() {
  //   this.oauthService.initImplicitFlow();
  // }
  //
  // logout() {
  //   this.oauthService.logOut();
  // }
  //
  // get givenName() {
  //   const claims = this.oauthService.getIdentityClaims();
  //   if (!claims) {
  //     return null;
  //   }
  //   return claims['name'];
  // }

}
