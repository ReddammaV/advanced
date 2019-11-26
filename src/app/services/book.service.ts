import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    { id: 1, name: "Angular 8", price: "800", description: "Angular 8 Books" },
    { id: 2, name: "Angular 5", price: "458", description: "Angular 5 Books" },
    { id: 3, name: "C#", price: "950", description: "C# Books" },
    { id: 4, name: "Java", price: "780", description: "Java Books" },
    { id: 5, name: "php", price: "682", description: "php Books" },
    { id: 1, name: "Angular 9", price: "985", description: "Angular 9 Books" },
  ];
  constructor() { }

  getBooks(): Observable<Book[]>{
    return Observable.of(this.books);
  }

  getBook(id:number): Observable<Book>{
    return Observable.of(this.books).map(books => books.find(book => book.id == id));
  }
}
