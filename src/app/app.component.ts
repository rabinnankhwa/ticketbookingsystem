import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	options: FormGroup;
	
	  constructor(fb: FormBuilder) {
		this.options = fb.group({
		  'fixed': false,
		  'top': 0,
		  'bottom': 0,
		});
	  }

	  
}
