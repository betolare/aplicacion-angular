import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {
      articulo:any;

  constructor(private servicioArticulos:ArticulosService, private router:Router) { 
      this.articulo={titulo:"", contenido:""};
  }

  ngOnInit() {
  creararticulo() {
  	 this.servicioArticulos.crearArticulo().subscribe(respuesta=>{
  	 	this.router.navigate(['/articulo', respuesta.id]);
  	 }, error=>{
  	 	alert("Error al crear el articulo");
  	 });
  }
  }

}
