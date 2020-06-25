import { Injectable } from '@angular/core';
import { TypeCartePrecisService } from './type-carte-precis.service';
import { Carte } from './carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
carte: Array<Carte> = new Array<Carte>(
  new Carte(1,this.srvTypeCartePrecis.typeCartePrecis[0],1),
  new Carte(2,this.srvTypeCartePrecis.typeCartePrecis[0],2),
  new Carte(3,this.srvTypeCartePrecis.typeCartePrecis[0],3),
  new Carte(4,this.srvTypeCartePrecis.typeCartePrecis[0],4),
  new Carte(5,this.srvTypeCartePrecis.typeCartePrecis[0],5),
  new Carte(6,this.srvTypeCartePrecis.typeCartePrecis[1],1),
  new Carte(7,this.srvTypeCartePrecis.typeCartePrecis[1],2),
  new Carte(8,this.srvTypeCartePrecis.typeCartePrecis[1],3),
  new Carte(9,this.srvTypeCartePrecis.typeCartePrecis[2],1),
  new Carte(10,this.srvTypeCartePrecis.typeCartePrecis[3],1),
  new Carte(11,this.srvTypeCartePrecis.typeCartePrecis[3],2),
  new Carte(12,this.srvTypeCartePrecis.typeCartePrecis[3],3),
  new Carte(13,this.srvTypeCartePrecis.typeCartePrecis[3],4),
  new Carte(14,this.srvTypeCartePrecis.typeCartePrecis[3],5),
  new Carte(15,this.srvTypeCartePrecis.typeCartePrecis[3],6),
  new Carte(16,this.srvTypeCartePrecis.typeCartePrecis[3],7),
  new Carte(17,this.srvTypeCartePrecis.typeCartePrecis[3],8),
  new Carte(18,this.srvTypeCartePrecis.typeCartePrecis[3],9),
  new Carte(19,this.srvTypeCartePrecis.typeCartePrecis[3],10),
  new Carte(20,this.srvTypeCartePrecis.typeCartePrecis[3],11),
  new Carte(21,this.srvTypeCartePrecis.typeCartePrecis[3],12),
  new Carte(22,this.srvTypeCartePrecis.typeCartePrecis[3],13),
  new Carte(23,this.srvTypeCartePrecis.typeCartePrecis[3],14),
  new Carte(24,this.srvTypeCartePrecis.typeCartePrecis[3],15),
  new Carte(25,this.srvTypeCartePrecis.typeCartePrecis[3],16),
  new Carte(26,this.srvTypeCartePrecis.typeCartePrecis[3],17),
  new Carte(27,this.srvTypeCartePrecis.typeCartePrecis[3],18),
  new Carte(28,this.srvTypeCartePrecis.typeCartePrecis[3],19),
  new Carte(29,this.srvTypeCartePrecis.typeCartePrecis[3],20),
  new Carte(30,this.srvTypeCartePrecis.typeCartePrecis[3],21),
  new Carte(31,this.srvTypeCartePrecis.typeCartePrecis[3],22),
  new Carte(32,this.srvTypeCartePrecis.typeCartePrecis[3],23),
  new Carte(33,this.srvTypeCartePrecis.typeCartePrecis[3],24),
  new Carte(34,this.srvTypeCartePrecis.typeCartePrecis[3],25),
  new Carte(35,this.srvTypeCartePrecis.typeCartePrecis[3],26),
  new Carte(36,this.srvTypeCartePrecis.typeCartePrecis[3],27),
  new Carte(37,this.srvTypeCartePrecis.typeCartePrecis[3],28),
  new Carte(38,this.srvTypeCartePrecis.typeCartePrecis[3],29),
  new Carte(39,this.srvTypeCartePrecis.typeCartePrecis[3],30),
  new Carte(40,this.srvTypeCartePrecis.typeCartePrecis[3],31),
  new Carte(41,this.srvTypeCartePrecis.typeCartePrecis[4],1),
  new Carte(42,this.srvTypeCartePrecis.typeCartePrecis[4],2),
  new Carte(43,this.srvTypeCartePrecis.typeCartePrecis[4],3),
  new Carte(44,this.srvTypeCartePrecis.typeCartePrecis[4],4),
  new Carte(45,this.srvTypeCartePrecis.typeCartePrecis[4],5),
  new Carte(46,this.srvTypeCartePrecis.typeCartePrecis[4],6),
  new Carte(47,this.srvTypeCartePrecis.typeCartePrecis[4],7),
  new Carte(48,this.srvTypeCartePrecis.typeCartePrecis[4],8)

);
  constructor(public srvTypeCartePrecis:TypeCartePrecisService) { 
    console.log('test : '+srvTypeCartePrecis);
  }
}
