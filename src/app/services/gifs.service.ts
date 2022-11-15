import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Gif } from '../gifs/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY     : string = 'HH74Wkq7n83Uovl2WuF6q3RIqEf8z9rM';
  private URL: string = 'http://api.giphy.com/v1/gifs/search?api_key=HH74Wkq7n83Uovl2WuF6q3RIqEf8z9rM&q=';
  private historial : string[] = [];

  public resultados: Data[] = [];


  get getHistorial() {
    return [...this.historial];
  }

  constructor( private httpCliente: HttpClient ) {}

  buscarGifs( termino: string ) {

    termino = termino.trim().toLocaleLowerCase();
    
    if( !this.historial.includes( termino ) ) {
      this.historial.unshift( termino );
      this.historial = this.historial.splice(0,10);
      
    }

    this.httpCliente.get<Gif>(this.URL.concat(termino).concat('&limit=10')).subscribe( ( resp ) => {
        this.resultados = resp.data;
      });

  }


}
