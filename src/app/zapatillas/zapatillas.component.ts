import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService }from '../services/zapatilla.service';

@Component({
    selector:'zapatillas',
    templateUrl:'zapatillas.components.html',
    providers:[ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo:string ="Componente de zapatillas";
    public zapatillas:Array<Zapatilla>; //creo variable del tipo array del tipo objeto Zapatilla
    //a partir de zapatillas, creo otro array para añadir las marcas y no repetirlas
    public marcas: String[]; //declaro la variable que será de tipo Array de strings
    public color:string;
    public mi_marca:string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.color="yellow";
        this.marcas= new Array(); //declaro el array
        
    }
    ngOnInit(){
        this.zapatillas=this._zapatillaService.getZapatillas();
        console.log(this.zapatillas);
        //llamo al metodo cuando se ejecute la clase
        this.getMarcas();

    }
    //creo un método para añadir las marcas no repetidas a mi nuevo array marcas
    getMarcas(){
        //con un foreach recorro los objetos del array zapatillas
        this.zapatillas.forEach((zapatilla, index)=>{
            //añado al array marcas el elemento marca del array zapatillas que estoy recorriendo
            //pero solo si no esta repetido, si es meno{{r que 0 significa que esa palabra no existe, por lo tanto la añado
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(indice){
        this.marcas.splice(indice,1);
    }
    obtenerTexto(){
        alert(this.mi_marca);
    }
}