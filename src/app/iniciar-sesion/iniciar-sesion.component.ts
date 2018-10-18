import { Component, OnInit } from '@angular/core';
import { UsuariosService} from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
      formulario:any;

  constructor(private servicioUsuarios:UsuariosService, private router:Router) {
  this.formulario={
  	auth:{
  		email: "",
  		password: ""
  	}
  } }

  ngOnInit() {
  }
  iniciar_sesion() {
  	this.servicioUsuarios.iniciarSesion(this.formulario).subscribe(respuesta=>{
      localStorage.setItem('sessionToken',respuesta.jwt);
      this.router.navigate(['/articulos']);
      alert("inicio de sesion exitosa");
  		},error=>{
  			alert("fallo el inicio de sesion, verifica la consola");
           console.log(error);
  		});
  }
}
