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
  list = new Array<string>();

  test(ev: KeyboardEvent) {
  //console.log(ev);
  this.values = (ev.target as HTMLInputElement).value;
  }

  onAdd(){
    this.list.push(this.text);
    this.text = "";
    console.log(this.list);
  }

  deleteTask(inputText : string){
    console.log(inputText);
    const index = this.list.indexOf(inputText);
    console.log(index);
    if (index !== - 1){
      this.list.splice(index, 1);
    }
  }


  ngOnInit(): void {
  }

}
