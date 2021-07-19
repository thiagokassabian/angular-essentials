import { AuthService } from './auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submittingForm: boolean = false;
	hide: boolean = true;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit() {
		this.buildForm();
	}

	private buildForm = () => {
		this.loginForm = this.formBuilder.group({
			username: [null, Validators.required],
			password: [null, Validators.required],
		});
	};

	submitForm() {
		const { username, password } = this.loginForm.value;

		this.submittingForm = true;
		this.authService.getUser(username, password).subscribe(user => {
			this.submittingForm = false;
			if (!user || Object.keys(user).length === 0) {
				console.log('não autorizado');
			} else {
				console.log('autorizado');
				this.authService.isAuthenticated = true;
				this.authService.menu = true;
				this.router.navigate(['/home']);
			}
		});
	}
}
