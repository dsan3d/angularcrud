import { Component, OnInit } from '@angular/core';
import { PhpAPIService } from './php-api.service';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD BASICO';
  VDevueltos:Persona[] = [new Persona()];

  ngOnInit(){
    this.llamarPHP();
    
  }

  constructor(private miServicio: PhpAPIService) {   }

  llamarPHP(){
    this.miServicio.llamarArchivoPHP().subscribe(
      respuesta =>{ this.VDevueltos = respuesta; } );
    }
}
