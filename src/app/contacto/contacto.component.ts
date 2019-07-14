import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public usuario: Usuario;
  public show_data;
  constructor() {
    this.usuario = new Usuario('','','','');
   }

  ngOnInit() {
  }
 onSubmit(form){
   this.show_data = this.usuario;
   console.log(this.show_data);
   //si quisieramos vaciarlo
   //form.reset(); 
 }
}
