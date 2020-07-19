import { Item } from './interface/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: Item[] = [];
  itemName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    if (this.itemName !== '') {
      const userItem = new Item(this.itemName, false);
      this.items.push(userItem);
      this.itemName = '';
      // optional: save in local storage or in a database using service
    }
  }

  deleteItem(item: Item): void {
    this.items.forEach(element => {
      if (element.name === item.name) {
        const indexElement = this.items.indexOf(element);
        this.items.splice(indexElement, 1);
      }
    });

    // Optional: delete from local or database
  }

}
