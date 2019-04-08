import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  isbn: string;
  price: number;
  author: string;
  style: string;
}

@Component({
  selector: 'app-products-displayer',
  templateUrl: './products-displayer.component.html',
  styleUrls: ['./products-displayer.component.scss']
})
export class ProductsDisplayerComponent implements OnInit {
  books: Array<Book> = [
    {
      name: 'book 1',
      isbn: 'isbn1',
      price: 12,
      author: 'author 1',
      style: 'terror',
    },
    {
      name: 'book 2',
      isbn: 'isbn2',
      price: 22,
      author: 'author 2',
      style: 'comedy',
    },
    {
      name: 'book 3',
      isbn: 'isbn3',
      price: 32,
      author: 'author 3',
      style: 'essay',
    }
  ];

  showBooks = true;
  switchedTimes = 0;

  constructor() { }

  ngOnInit() {
  }

  switchBooksDisplay() {
    this.showBooks = !this.showBooks;
    this.switchedTimes++;
  }

  moveLeft() {
    console.log("I am moving to the left")
  }

  moveRight() {
    console.log("I am moving to the right")
  }

  move(px: number) {
    if (px < 0) {
      this.moveLeft()
    }

    if (px >= 0) {
      this.moveRight()
    }
  }
}
