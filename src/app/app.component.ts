import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'proyecto Angular Ester';
  public mostrar_videojuegos:boolean=true;

  ocultarVideojuegos(value){
    this.mostrar_videojuegos=value;
  }

}
