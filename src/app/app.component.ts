import { Component } from '@angular/core';
import { PhpAPIService } from './php-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD BASICO';
  VDevueltos:Object ="";

  constructor(private miServicio: PhpAPIService) {   }

  llamarPHP(){
    this.miServicio.llamarArchivoPHP().subscribe(
      respuesta =>{ this.VDevueltos = respuesta; } );
    }
}
