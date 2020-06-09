import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	constructor(private userService: UserService, private router: Router) {}
	
	ngOnInit() {}

	fbLogin() {
		this.userService.fbLogin().then(()=>{
			console.log("User has been logged in");
			this.router.navigate(['/dashboard']);
		});
	}

	signIn() {
		this.userService().setUser({
			user: "Dolly"
		});
	}
}
