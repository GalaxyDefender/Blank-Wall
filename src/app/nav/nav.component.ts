import { Component, OnInit } from '@angular/core';
// import 'test.css';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	show:boolean = false;

	toggleCollapse() {
		this.show = !this.show;
	}
  constructor() { }

  ngOnInit() {
  }

}
