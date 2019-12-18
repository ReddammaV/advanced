import { Component, OnInit } from '@angular/core';
import { InmemoryService } from '../../services/inmemory.service';
import { Book } from '../../interfaces/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gethttp',
  templateUrl: './gethttp.component.html',
  styleUrls: ['./gethttp.component.css']
})
export class GethttpComponent implements OnInit {
  // json data for books
  books: Book[];
  booksasync: Observable<Book[]>;
  // message
  message: string;
  messageasync: Observable<string>;
  // filter for books
  booksfiltered: Book[];
  booksfilteredasync: Observable<Book[]>;


  constructor(private inmemoryService:InmemoryService) { }

  ngOnInit() {
    this.getBooks();
    this.getMsg();
    // we have to pass parameters
    this.filterBooks("Angular 8","Angular 8 Books");
  }

  getBooks(){
    this.inmemoryService.getBooksFromStore().subscribe(data => this.books = data);
    this.booksasync = this.inmemoryService.getBooksFromStore();
  }

  getMsg(){
    this.inmemoryService.getMessage().subscribe(data => this.message = data);
    this.messageasync = this.inmemoryService.getMessage();
  }

  // filter Books
  filterBooks(name:string, description:string){
    this.inmemoryService.filterBooks(name,description).subscribe(data => this.booksfiltered = data);
    this.booksfilteredasync = this.inmemoryService.filterBooks(name,description);
  }

}
