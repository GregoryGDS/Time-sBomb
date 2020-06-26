  import { Injectable } from '@angular/core';
  import { TypeCarte } from './type-carte';

@Injectable({
  providedIn: 'root'
})
export class TypeCarteService {
  typeCarte: Array<TypeCarte> = new Array<TypeCarte>(
    new TypeCarte(1,'Role'),
    new TypeCarte(2,'Cable'));
  
  constructor() { }
}
