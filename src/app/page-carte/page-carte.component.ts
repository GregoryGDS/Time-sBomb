import { Component, OnInit } from '@angular/core';
import { TypeCarteService } from '../type-carte.service';
import { TypeCartePrecisService } from '../type-carte-precis.service';
import { CarteService } from '../carte.service';

@Component({
  selector: 'app-page-carte',
  templateUrl: './page-carte.component.html',
  styleUrls: ['./page-carte.component.css']
})
export class PageCarteComponent implements OnInit {

  constructor(
    public srvTypeCarte: TypeCarteService,
    public srvTypeCartePrecis: TypeCartePrecisService,
    public srvCarte: CarteService
    ) { 
      console.log(srvTypeCarte);
      console.log(srvTypeCartePrecis.typeCartePrecis );
      console.log(srvCarte.carte);
  }

  ngOnInit() {
  }

}
