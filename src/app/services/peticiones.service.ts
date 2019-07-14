import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesService{
    public url:string;
   
    constructor(
        public _http:HttpClient
    ){
    this.url="https://reqres.in/"
    }
    getUser(userId):Observable<any>{
        return this._http.get(this.url+ 'api/users/' + userId);
    }
    addUser(user):Observable<any>{
        let params = JSON.stringify(user); //le tenemos que enviar un jason, asi que lo tenemos que convertir
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); //le tenemos que enviar la cabeceras también

        return this._http.post(this.url+'api/users', params, {headers:headers});
    }
}