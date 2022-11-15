import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { GifsModule } from '../gifs/gifs.module';




@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    GifsModule
  ], 
  exports: [
    FooterComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
