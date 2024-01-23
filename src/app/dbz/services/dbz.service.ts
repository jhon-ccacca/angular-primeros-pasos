import {  Injectable } from '@angular/core';

import { v4 as uuid} from  'uuid';



import { Character } from '../interfaces/character.interface';

@Injectable({providedIn:'root'})
export class DbzService{

  public characters: Character[] = [{
    id:uuid(),
    name: 'Goku',
    power: 1000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 900
  }, {
    id: uuid(),
    name: 'Krillin',
    power: 20
  }];

  addCharacter(character: Character): void {
    //console.log('MainPage');
    //console.log(character);
    const newcharacter: Character = { id: uuid(), ...character};
    this.characters.push(newcharacter);

    console.log({ newcharacter })
  }

  /*onDeleteId(i: number): void {

    console.log({ i })
    this.characters.splice(i, 1);
  }
*/
  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !==id );
    console.log(id );
  }


  constructor(){}

}
