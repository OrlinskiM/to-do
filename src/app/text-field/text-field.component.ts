import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  constructor() { }

  values = '';
  text = "";
  list: string[] = [];

  test(ev: KeyboardEvent) {
  this.values = (ev.target as HTMLInputElement).value;
  }

  onAdd(){
    this.list.push(this.text);
    localStorage.setItem("to-do", JSON.stringify(this.list));
    this.text = "";
  }

  deleteTask(inputText : string){
    const index = this.list.indexOf(inputText);
    if (index !== - 1){
      this.list.splice(index, 1);
      localStorage.setItem("to-do", JSON.stringify(this.list));
    }
  }


  ngOnInit(): void {
    const memList = localStorage.getItem("to-do");
    if(memList) this.list = JSON.parse(memList);
  }

}
