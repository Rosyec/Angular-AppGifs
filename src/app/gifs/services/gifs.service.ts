import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private historial: string[] = [];
  private API_KEY: string = 'HH74Wkq7n83Uovl2WuF6q3RIqEf8z9rM';

  constructor() { }

  get getHistorial(): string[]{
    return [...this.historial];
  }
  
  buscarGifs( termino: string ): void{

    termino = termino.toUpperCase();

    if (!this.historial.includes( termino )) {
      this.historial.unshift( termino );
    }

    this.historial = this.historial.splice(0, 10);
    console.log( this.historial );
  }


}
