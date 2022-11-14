import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  dato: string = '';

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  
  buscar(): void{
    const valor = this.txtBuscar.nativeElement.value;
    this.gifService.buscarGifs( valor );
    console.log( valor )
    this.txtBuscar.nativeElement.value = '';
  }

}
