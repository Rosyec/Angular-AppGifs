import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor( private gifService: GifsService ) { }

  ngOnInit(): void {
  }

  get getResultados(){
    return this.gifService.resultados;
  }
  
}
