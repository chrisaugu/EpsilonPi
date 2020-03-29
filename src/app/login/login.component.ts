import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
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