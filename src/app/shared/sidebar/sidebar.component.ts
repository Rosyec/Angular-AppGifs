import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

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
}
