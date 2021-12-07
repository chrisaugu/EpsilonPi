import {Component, Inject} from '@angular/core';
import { HttpClient, /*HTTP_BINDINGS*/ } from '@angular/common/http';
// import 'rxjs/Observable';
// import 'rxjs';

import { User } from "./shared/models/user.model";
// import { SearchService } from "./shared";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
// import * as Http from "http";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epsilonpi';
  url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  clickCount = 0;
  newUser: User;
  private users: User[];
  items = [];

  musics = [];
  radioTitle = "Radio Buttons in Angular";
  radioItems = ['option1','option2','option3','option4'];
  model = { options: 'option3' };
  track: string;
  userName: any;
  isLoading: boolean;

  constructor(@Inject(HttpClient) public http:HttpClient) {
  	this.items = ['one', 'two', 'three', 'four'];
  }

  ngOnInit() {
    this.users = [
      new User("Jane"),
      new User("Dave"),
      new User("Tom")
    ];
  }

  createNewUser(user){
    console.log("new user = "+user);
    // this.newUser = new User(user);
    // this.users.push(this.newUser);
  }

  clickMe() {
    ++this.clickCount;
    console.log("click count: "+this.clickCount);
  }

  httpRequest() {
    $.getJSON(this.url, {
      tags: $("searchitem").val(),
      tagmode: "any",
      format: "json"
    }, function (data) {
      $.earch(data.items, function(i, item){
        $("<img/>").attr("src", item.media.m).prependTo("#images")
      })
    })
  }

  onClick($event: MouseEvent) {
    console.log("clicked", $event);

  }

  signIn() {
    this.userName = "kitten";
  }

  loaded() {
    this.isLoading = false;
  }
}
