import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';


@Injectable({
  providedIn: 'root'
})
export class PhpAPIService {
  private urlPHP = 'http://localhost/apiPHP/personas';
  constructor(private Clientehttp: HttpClient) { }

  llamarArchivoPHP():Observable<any> {
    
    const personas = this.Clientehttp.get(this.urlPHP);    
    return personas;
  }
}
