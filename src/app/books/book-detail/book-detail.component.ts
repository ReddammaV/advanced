import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }
  id:any;

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params.id; (You can use this.id instead of the line)
    // alert(this.activatedRoute.snapshot.params.id);
    console.log(this.activatedRoute.snapshot.params.id);
    // this.bookService.getBook(this.activatedRoute.snapshot.params.id).subscribe(data => {
    //   this.book = data;
    //   console.log('book details', this.book);
    // });

    //this is for activatedroute using snapshot for params
    this.getBook();

    //this is for activatedroute using snapshot for paramMap using parseInt
    // this.getBookParammap();

    //this is for activatedroute using subscribe for params
    // this.getBookRoute();

    //this is for activatedroute using subscribe for paramMap using parseInt
    // this.getBookRouteParammap();

  }

  // activated route with params
  getBook() {
    this.bookService.getBook(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.book = data;
      console.log('book details', this.book);
    });
  }

  // activated route with paramMap using parseInt
  getBookParammap() {
    this.bookService.getBook(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(data => {
      this.book = data;
      console.log('book details', this.book);
    });
  }


  //using route subscribe methods
  // route subscribe with params
  getBookRoute() {
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getBook(params.id).subscribe(data => {
        this.book = data;
      })
    })
  }


   // route subscribe with params using parseInt
   getBookRouteParammap() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookService.getBook(parseInt(params.get('id'))).subscribe(data => {
        this.book = data;
      })
    })
  }

}
