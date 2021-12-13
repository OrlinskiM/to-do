import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list: string[] = JSON.parse(localStorage.getItem("to-do") || '{}');

  onAdd(text : string) : void{
    this.list.push(text);
    localStorage.setItem("to-do", JSON.stringify(this.list));

  }

  deleteTask(inputText : string){
    const index = this.list.indexOf(inputText);
    if (index !== - 1){
      this.list.splice(index, 1);
      localStorage.setItem("to-do", JSON.stringify(this.list));
    }
  }

  getAll() : string[]{
    return this.list;
  }
}
