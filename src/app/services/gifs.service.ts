import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Gif } from '../gifs/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY     : string = 'HH74Wkq7n83Uovl2WuF6q3RIqEf8z9rM';
  private URL: string = 'https://api.giphy.com/v1/gifs';
  private historial : string[] = [];

  public resultados: Data[] = [];


  get getHistorial() {
    return [...this.historial];
  }

  constructor( private httpCliente: HttpClient ) {
    this.historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    //this.buscarGifs('gif');
  }




  buscarGifs( termino: string ) {

    termino = termino.trim().toLocaleLowerCase();
    
    if( !this.historial.includes( termino ) ) {
      this.historial.unshift( termino );
      this.historial = this.historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify( this.historial ));
      
    }

    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('limit', '40')
    .set('q', termino);
    
    this.httpCliente.get<Gif>(`${ this.URL }/search`, { params }).subscribe( ( resp ) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify( this.resultados ));
      });

  }


}
