import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

   public heroeNames :string [] =['Spiderman','Batman','Hulk','Iroman','Thor'] ;
   public borrado? :string = '';
   removelastHero():void{
     this.borrado = this.heroeNames.pop();

   }

}
