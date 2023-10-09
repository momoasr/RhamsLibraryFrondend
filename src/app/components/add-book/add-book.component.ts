import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  createBookFormGroup!: FormGroup;
  books: Book[] = [];
  createBook!: Book;
  private bookUrl = 'https://localhost:7090/Books';
  
  constructor(private fb: FormBuilder, 
    private http: HttpClient){ }
  

  ngOnInit(){
    // this.createBookFormGroup = new FormGroup({
    //   title: new FormControl(),
    //   author: new FormControl(),
    //   genre: new FormControl(),
    //   year: new FormControl()
    // });
    this.http.get<Book[]>(this.bookUrl)
      .pipe(
        tap((books) => {
          this.books = books; 
          console.log('The returned book by get: ', books)
        })
      )
      .subscribe();
    this.createBookFormGroup = this.fb.group({
      title: [''],
      author: [''],
      genre: [''],
      year: [],
    });
  }
  onCreateBook(): void {
    console.log(this.createBookFormGroup.value);
    console.log(this.createBookFormGroup.valid);
    const bookToCreate: Book = {
      id: 0, 
      title: 'The Bible',
      author: 'Unknown',
      genre: 'Religion',
      year: 1972
    }

    this.http.post<Book>(this.bookUrl, bookToCreate)
      .pipe(
        tap((book) => {
          this.createBook = book;
          console.log('Book created: ', book)
        })
      )
      .subscribe();

  }
  
}
