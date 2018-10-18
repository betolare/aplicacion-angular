import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
    articulos: Array<any>
  constructor(private servicioArticulos:ArticulosService) { 
      this.articulos=[{
      	titulo: "",
      	contenido: ""
      }];
  }

  ngOnInit() {
  	this.servicioArticulos.traerArticulos().subscribe(respuesta=>{
  		this.articulos=respuesta;
  	}, error=>{
  		alert("No se han podido traer los articulos");
  	});

    eliminarArticulo(id){
      let confirmacion: confirm("Estas seguro");
      if(confirmacion){
      this.servicioArticulos.eliminarArticulo(id).subscribe(respuestaEliminar=>{
        alert("Articulo eliminado");
        this.servicioArticulos.traerArticulos().subscribe(respuesta=>{
      this.articulos=respuesta;
    }, error=>{
      alert("No se han podido traer los articulos");
    });
      }, errorEliminar=>{
        alert("No se pudo eliminar");
      });
    }
  }

}
