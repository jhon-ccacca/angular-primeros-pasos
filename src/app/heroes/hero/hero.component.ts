import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

    public name : string = 'Iroman';
    public age: number = 50;

    get capitalizedName():string{
      return this.name.toUpperCase();
    }

    getHeroeDescription():string {
      return `${this.name} - ${this.age}`;
    }

    changeAge():void{
      this.age =20;
    }

    changeHero():void{
      this.name ='Spiderman';
    }

    changeForm(): void {
      this.name = 'Iroman';
      this.age = 50;
    }
}
