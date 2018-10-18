import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:string;
  encabezados:any;

  constructor(private http:HttpClient) {
           this.url="http://apidocumentospiensadigital.herokuapp.com";
           this.encabezados={ headers: new HttpHeaders({
           	   'Content-Type': 'Aplication/json'})
       }
           }

           iniciarSesion(usuario:any):Observable<any>{
           	return this.http.post<any>(this.url='/user_token',usuario,this.encabezados);
           }

         crearCuenta(usuario:any):Observable<any>{
         	return this.http.post<any>(this.url='/users',usuario,this.encabezados);
         }
}

