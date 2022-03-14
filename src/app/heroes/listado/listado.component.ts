import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  public heroeBorrado: string="";

  borrarHeroe():void{
     this.heroeBorrado = this.heroes.shift()||'';
  }
}
