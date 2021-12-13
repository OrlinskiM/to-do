import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  constructor(
    private listService: ListService
    ) { }

  values = '';
  text = "";
  list: string[] = [];

  test(ev: KeyboardEvent) {
  this.values = (ev.target as HTMLInputElement).value;
  }

  onAdd(){
    this.listService.onAdd(this.text);
    this.text = "";
  }

  deleteTask(inputText : string){
    this.listService.deleteTask(inputText);
  }


  ngOnInit(): void {
    this.list = this.listService.getAll();
  }
}
