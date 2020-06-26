import { Component, OnInit } from '@angular/core';
import { CarteService } from '../carte.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
	title = 'TIME\'s BOMB';

	constructor(public srvCarte: CarteService){
		console.log(srvCarte);
	}
  
  ngOnInit(): void {
  }


}