import{ Component , OnInit ,  DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent implements OnInit,DoCheck, OnDestroy { 
    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo="Componente de Videojuegos"
        this.listado="Listado de los videojuegos"
        console.log('se ha cargado el componente: videojuego.componente.ts');
    }
    ngOnInit(){
        console.log('OnInit ejecutado');
    }
    ngDoCheck(){
        console.log('DoCheck ejecutado');
    }
    ngOnDestroy(){
        console.log('Ondestroy ejecutado');
    }
    cambiarTitulo(){
        this.titulo='Nuevo titulo ';
    }
}