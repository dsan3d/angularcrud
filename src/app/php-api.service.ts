import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';


@Injectable({
  providedIn: 'root'
})
export class PhpAPIService {
  private urlPHP = 'http://localhost/apiPHP/';
  private Personas:Persona[] = [new Persona()];
  constructor(private http: HttpClient) { }

  llamarArchivoPHP(){

    return this.http.get(`${this.urlPHP}/personas`);   

  }
  /*registrar(persona: Persona) {
    return this.http.post(`${this.urlPHP}/index.php`, persona);
  }

  actualizar(persona: Persona) {
    return this.http.put(`${this.rutaApi}/actualizarPersona.php`, persona);
  }

  eliminar(id: string | number) {
    return this.http.delete(`${this.rutaApi}/eliminarPersona.php?id=${id}`);
  }*/
}
