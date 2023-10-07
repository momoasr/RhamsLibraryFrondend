import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  createBookForm!: FormGroup;
  books: Book[] = [];
  createBook!: Book;
  
  constructor(private fb: FormBuilder, 
    private http: HttpClient){ }
  

  ngOnInit(){
    this.createBookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      genre: new FormControl(),
      year: new FormControl()
    });
  }
  onCreateBook(): void {
    console.log(this.createBookForm.value);
  }
  
}
