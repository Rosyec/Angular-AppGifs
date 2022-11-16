import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  @Input() btn!: HTMLButtonElement;

  
  buscar(): void{
    const valor = this.txtBuscar.nativeElement.value;
    console.log('Dato: ', valor )
    if (valor.trim() == '') {
      return;
    }
    this.gifService.buscarGifs( valor );
    console.log( valor )
    console.log('Btn: ', this.btn)
    this.btn.click();
    this.txtBuscar.nativeElement.value = '';
  }

}
