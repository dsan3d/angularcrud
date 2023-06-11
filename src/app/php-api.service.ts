import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';


@Injectable({
  providedIn: 'root'
})
export class PhpAPIService {
  private urlPHP = 'http://localhost/apiPHP/personas';
  private Personas:Persona[] = [new Persona()];
  constructor(private Clientehttp: HttpClient) { }

  llamarArchivoPHP():Observable<Array<Persona>> {
    
    this.Personas = this.Clientehttp.get<Array<Persona>>(this.urlPHP);    
    return this.Personas;
  }
}
