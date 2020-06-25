import { TypeCartePrecis } from './type-carte-precis';

export class Carte {
    constructor(
        public id?: number,
        public typePrecis?: TypeCartePrecis,
        public numero?: number
    ) { }
}
