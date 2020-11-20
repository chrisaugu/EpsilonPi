import { Component } from '@angular/core';
// import { Http, HTTP_BINDINGS } from '@angular/common/http';
// import 'rxjs/Observable';
// import 'rxjs';
// import { RouteConfig } from '@angular/router';

// import { User } from "./shared/components/signup";
// import { SearchService } from "./shared";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// @RouteConfig([
//   {path:'/about', name:'About', component:'About'},
//   {path:'/login', name:'Login', component:'Login', useAsDefault:true},
//   {path:'/artists', name:'Artists', component:'Artist'}
// ])

export class AppComponent {
  url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  clickCount = 0;
  // newUser: User;
  items = [];

  users = [
    // new User("Jane"),
    // new User("Dave"),
    // new User("Tom")
  ];
  title = 'epsilonpi';
  musics = [];
  radioTitle = "Radio Buttons in Angular";
  radioItems = ['option1','option2','option3','option4'];
  model = { options: 'option3' };
  track: string;
  userName: any;

  constructor() {
  }

  ngOnInit() {

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

  // constructor(@Inject(Http) public http:Http) {
  // 	this.items = ['one', 'two', 'three', 'four'];
  // }

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
}
