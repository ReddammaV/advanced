import { Component, OnInit } from '@angular/core';
import { InmemoryService } from '../services/inmemory.service';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inmemory',
  templateUrl: './inmemory.component.html',
  styleUrls: ['./inmemory.component.css']
})
export class InmemoryComponent implements OnInit {
  // for all data
  myBooks: Book[];
  myBooksAsync: Observable<Book[]>;

  //for id
  mybestBook: Book;
  mybestBookAsync: Observable<Book>;

  constructor(private memoryService: InmemoryService) { }

  ngOnInit() {
    this.getBooks_subscribe();
    this.getBooks_async();
    this.getBookById_subscribe();
    this.getBookById_async();
  }

  // for all data by subscribe
  getBooks_subscribe() {
    // this.myBooks = this.bookservice.getBooksFromStore();
    // debugger;
    this.memoryService.getBooksFromStore().subscribe(books => {
      // debugger;
      this.myBooks = books;
      console.log(books);
      //with filter
      // this.myBooks = books.filter(book => book.name == 'php');
    }
    );
  }

  // for all data by async
  getBooks_async() {
    this.myBooksAsync = this.memoryService.getBooksFromStore();
  }

  // byid subscribe
  getBookById_subscribe() {
    this.memoryService.getBookFromStrorById(4).subscribe(book => this.mybestBook = book);
  }

  //byid with async
  getBookById_async() {
    this.mybestBookAsync = this.memoryService.getBookFromStrorById(4);
  }


}
