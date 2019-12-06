import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class InmemoryService {
  bookUrl = "/api/books";

  constructor(private http: HttpClient) { }
  //to get all data
  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  //to get by id
  getBookFromStrorById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + '/' + id);
  }
}
