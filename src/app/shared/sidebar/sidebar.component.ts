import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  titulo: string = 'App Gifs';

  constructor( private gifService: GifsService ) { }

  ngOnInit(): void {}

  get getHistorial(){
    return this.gifService.getHistorial;
  }

  //@ViewChild('itemHistorial') itemHistorial!: ElementRef<HTMLInputElement>;

  buscarTerminoHistorial( itemHistorial:string ){
    console.log("Value: ", itemHistorial);
    this.gifService.buscarGifs(itemHistorial);
  }
}
