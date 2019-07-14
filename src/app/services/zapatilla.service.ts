import { Injectable } from '@angular/core';
import { Zapatilla }from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Nike Joordan', 'Nike', 'Rojo', 130, true),
            new Zapatilla('Adidas Gazele', 'Adidas', 'Verde', 65, true),
            new Zapatilla('Adidas Stand Smith', 'Adidas', 'blanco', 90, true),
            new Zapatilla('Nike Air', 'Nike', 'blanco', 90, false)
        ];
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}