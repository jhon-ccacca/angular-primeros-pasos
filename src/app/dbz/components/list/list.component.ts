import { Character } from './../../interfaces/character.interface';

import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  /*@Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();
*/
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Picoro',
    power: 1000,
  }];

/*
  onDeleteCharacter(index:number):void{
    console.log(index);
    this.onDeleteId.emit(index);
  }
*/
  ondeleteCharacterById(id?: string): void {
    if( !id ) return;

  //  console.log(id);
    this.onDeleteId.emit(id);
  }

}
