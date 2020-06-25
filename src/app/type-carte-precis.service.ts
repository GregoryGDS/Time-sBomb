import { Injectable } from '@angular/core';
import { TypeCartePrecis } from './type-carte-precis';
import { TypeCarte } from './type-carte';
import { TypeCarteService } from './type-carte.service';

@Injectable({
  providedIn: 'root'
})
export class TypeCartePrecisService {
  typeCartePrecis: Array<TypeCartePrecis> = new Array<TypeCartePrecis>(
    new TypeCartePrecis(1,this.srvTypeCarte.typeCarte[0],'Sherlock'),
    new TypeCartePrecis(2,this.srvTypeCarte.typeCarte[0],'Moriarty'),
    new TypeCartePrecis(3,this.srvTypeCarte.typeCarte[1],'Bombe'),
    new TypeCartePrecis(4,this.srvTypeCarte.typeCarte[1],'Cable sécurisé'),
    new TypeCartePrecis(5,this.srvTypeCarte.typeCarte[1],'Cable de désamorçage'),
    );

  constructor(public srvTypeCarte:TypeCarteService) { 
    //console.log('test : '+TypeCarteService)
  }
}
