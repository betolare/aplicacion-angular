import { Component, OnInit } from '@angular/core';
import { UsuariosService} from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;

  constructor(private servicioUsuarios:UsuariosService, private router:Router) {
  this.formulario={
  	user:{
  	name:"",
  	email:"",
  	password:"",
  	password_confimation:""
  } }}

  ngOnInit() {
  }
  CrearCuenta(){
  	this.servicioUsuarios.crearCuenta(this.formulario).subscribe(respuesta=>{
        let autenticacion={auth:{email:formulario.user.email, password:formulario.user.password}
    };

  	this.servicioUsuarios.iniciarSesion(autenticacion).subscribe(respuestaAuth=>{
  		localStorage.setItem("sesionToken",respuesta.jwt);
  		this.router.navigate(['/articulos']);
  		alert('Usuario creado, Bienvenido');
  	})
  	},errorAuth=>{
       alert("Fallo la autenticacion");
  	});
  	error=>{
  		alert("No se ha podido crear el usuario, revisa la consola");
  	}
  }
}
