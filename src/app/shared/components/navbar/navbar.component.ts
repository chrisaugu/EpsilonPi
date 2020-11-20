import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
  private userName: string;
  constructor() {
    // @Input('userName')
  }

  ngOnInit() {
  }

  signIn() {
    this.userName = "kitten";
  }
}
