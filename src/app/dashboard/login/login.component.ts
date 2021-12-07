import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

	constructor(private userService: UserService,
              private router: Router) {}

	ngOnInit() {}

	fbLogin() {
		this.userService.fbLogin().then(()=>{
			console.log("User has been logged in");
			this.router.navigate(['/dashboard']);
		});
	}

	signIn() {
		this.userService.setUser({
			user: "Dolly"
		});
	}
}
