import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class InmemoryService {
  bookUrl = "/api/books";
  msgUrl = "/api/message";

  constructor(private http: HttpClient) { }
  //to get all data
  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  //to get by id
  getBookFromStrorById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + '/' + id);
  }

  //for message data
  getMessage(): Observable<string> {
    return this.http.get<string>(this.msgUrl);
  }

  //httpHeaders 
  filterBooks(name: string, description: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&description=' + description);
  }
}
