import { Item } from './../interface/item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() item: Item;
  @Output() itemForDelete = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(): void {
    this.itemForDelete.emit(this.item);
  }

}
