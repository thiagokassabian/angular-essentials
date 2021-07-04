import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	title = 'frontend';

	navEvents = (text: string) => {
		console.log(text)
	}
}
