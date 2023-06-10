import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhpAPIService {
  private urlPHP = 'http://apipersonas/index.php';
  constructor(private Clientehttp: HttpClient) { }

  llamarArchivoPHP():Observable<Object> {
    return this.Clientehttp.get(this.urlPHP);
  }
}
